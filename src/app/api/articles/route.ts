import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    // Verify API key from Make.com
    const apiKey = request.headers.get('x-api-key');
    if (apiKey !== process.env.MAKE_COM_API_KEY) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, slug, content, excerpt, tags, featured_image } = body;

    // Validate required fields
    if (!title || !slug || !content) {
      return Response.json(
        { error: 'Missing required fields: title, slug, content' },
        { status: 400 }
      );
    }

    // Insert article (unpublished by default)
    const { data, error } = await supabase
      .from('articles')
      .insert([
        {
          title,
          slug,
          content,
          excerpt: excerpt || content.substring(0, 160),
          tags: Array.isArray(tags) ? tags : [],
          featured_image: featured_image || null,
          published: false,
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return Response.json(
        { error: 'Failed to save article', details: error.message },
        { status: 500 }
      );
    }

    return Response.json(
      {
        success: true,
        message: 'Article received and queued for review',
        article: data[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('API error:', error);
    return Response.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}

// GET: Fetch all published articles
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');

    const { data, error, count } = await supabase
      .from('articles')
      .select('*', { count: 'exact' })
      .eq('published', true)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) throw error;

    return Response.json({
      success: true,
      articles: data,
      total: count,
      limit,
      offset,
    });
  } catch (error) {
    console.error('GET error:', error);
    return Response.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}

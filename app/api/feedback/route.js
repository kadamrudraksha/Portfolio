import { createClient } from "@supabase/supabase-js";

// ✅ Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL, 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function POST(request) {
  try {
    const body = await request.json();

    // ✅ Insert feedback without requiring a user session
    const { error } = await supabase
      .from("feedbacks")
      .insert([{ feedback: body.feedback }]);

    if (error) throw error;

    return Response.json({ success: true, message: "Feedback submitted!" });
  } catch (error) {
    console.error("Supabase Insert Error:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

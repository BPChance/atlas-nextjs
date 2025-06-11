import { NextResponse, NextRequest } from "next/server";
import { fetchQuestions } from "@/lib/data";

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const segments = url.pathname.split("/");
    const id = segments[segments.indexOf("topics") + 1];

    if (!id) {
      return NextResponse.json({ error: "Missing topic ID" }, { status: 400 });
    }

    const questions = await fetchQuestions(id);
    const result = questions.map(({ id, title, topic_id, votes }) => ({
      id,
      title,
      topic_id,
      votes,
    }));
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch questions" },
      { status: 500 }
    );
  }
}

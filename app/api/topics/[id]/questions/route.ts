import { NextResponse } from "next/server";
import { fetchQuestions } from "@/lib/data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const questions = await fetchQuestions(params.id);
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

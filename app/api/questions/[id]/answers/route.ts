import { NextResponse } from "next/server";
import { fetchAnswers } from "@/lib/data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const answers = await fetchAnswers(params.id);
    const result = answers.map(({ id, answer, question_id }) => ({
      id,
      answer,
      question_id,
    }));
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch answers" },
      { status: 500 }
    );
  }
}

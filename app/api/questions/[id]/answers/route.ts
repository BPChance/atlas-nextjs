import { NextResponse, NextRequest } from "next/server";
import { fetchAnswers } from "@/lib/data";

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const segments = url.pathname.split("/");
    const id = segments[segments.indexOf("questions") + 1];

    if (!id) {
      return NextResponse.json(
        { error: "Missing question ID" },
        { status: 400 }
      );
    }

    const answers = await fetchAnswers(id);
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

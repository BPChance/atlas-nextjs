import { fetchQuestion, fetchAnswers } from "@/lib/data";

interface Props {
  params: { id: string };
}

export default async function Page({ params }: Props) {
  const question = await fetchQuestion(params.id);
  const answers = await fetchAnswers(params.id);
  //   question.answer_id = answers[0]?.id;

  if (!question) {
    return <div>Question not found</div>;
  }
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{question.title}</h1>
      <form className="mb-6">
        <div className="flex items-center border border-gray-300 rounded px-3 py-2">
          <input
            type="text"
            placeholder="Answer question"
            className="flex-grow outline-none bg-transparent placeholder-gray-400"
          />
          <button
            type="submit"
            className="ml-4 bg-blue-900 text-white px-4 py-1 rounded hover:bg-blue-800"
          >
            Answer
          </button>
        </div>
      </form>
      <div className="space-y-4 mt-6">
        {[...answers]
          .sort((a, b) =>
            a.id === question.answer_id
              ? -1
              : b.id === question.answer_id
              ? 1
              : 0
          )
          .map((answer) => (
            <div
              key={answer.id}
              className="border p-3 rounded flex justify-between items-center"
            >
              <p>{answer.answer}</p>
              <span className="ml-4">
                {answer.id === question.answer_id ? (
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <img
                      src="/accepted.png"
                      alt="Accepted Answer"
                      className="w-5 h-5"
                    />
                  </div>
                ) : (
                  <img
                    src="/check.png"
                    alt="Mark as Accepted"
                    className="w-6 h-6"
                  />
                )}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

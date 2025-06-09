// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Topic = {
  id: string;
  title: string;
};

export type Question = {
  answer_id: any;
  id: string;
  title: string;
  topic_id: string;
  votes: number;
};

export type Answer = {
  id: string;
  question_id: string;
  text: string;
  created_at: string;
};

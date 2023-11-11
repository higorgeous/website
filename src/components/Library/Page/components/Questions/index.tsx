import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { Wrapper } from './styles';
import Question from './components/Question';

const Questions: React.FC<any> = (questions) => {
  const { questionOpen, setQuestionOpen } = questions;

  const handleQuestionOpen = (id: string) => {
    if (questionOpen !== `` && questionOpen === id) {
      setQuestionOpen(``);
    } else if (questionOpen !== `` && questionOpen !== id) {
      setQuestionOpen(id);
    } else {
      setQuestionOpen(id);
    }
  };

  const data = useStaticQuery(
    graphql`
      query {
        faq: contentfulInfoFrequentlyAskedQuestions(
          title: { eq: "Frequently asked questions" }
        ) {
          questions {
            id
            question
            answer {
              raw
              references {
                ... on ContentfulInfoLinks {
                  contentful_id
                  __typename
                  text
                  uri
                }
              }
            }
          }
        }
      }
    `,
  );

  const faq = data.faq.questions;
  return (
    <Wrapper id="full-section">
      <div>
        {faq.map(
          (
            node: JSX.IntrinsicAttributes & {
              id: string;
              question: string;
              answer: any;
              index: number;
            } & { children?: React.ReactNode },
            index: number,
          ) => (
            <Question
              key={node.id}
              {...node}
              index={index}
              questionOpen={questionOpen}
              handleQuestionOpen={handleQuestionOpen}
            />
          ),
        )}
      </div>
    </Wrapper>
  );
};
export default Questions;

import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { Wrapper } from './styles';
import Question from './components/Question';

type Props = {
  innerRef: any;
};

const Questions: React.FC<Props> = (questions) => {
  const { innerRef } = questions;

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
    <Wrapper ref={innerRef}>
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
            <Question key={node.id} {...node} index={index} />
          ),
        )}
      </div>
    </Wrapper>
  );
};
export default Questions;

import React, { useState } from 'react';
import Answer from '../Answer';

import { Body, Heading, Wrapper } from './styles';

type Props = {
  question: string;
  answer: any;
  index: number;
};

const Question: React.FC<Props> = (item) => {
  const { question, answer, index } = item;

  const [isOpen, setOpen] = useState(false);

  return (
    <Wrapper>
      <Heading id="faq" onClick={() => setOpen(!isOpen)} isOpen={isOpen}>
        <h5>
          {index < 9 ? `0${index + 1}` : index + 1} - {question}
        </h5>
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjU2IDI1NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwb2x5Z29uIHBvaW50cz0iMjI1LjgxMyw0OC45MDcgMTI4LDE0Ni43MiAzMC4xODcsNDguOTA3IDAsNzkuMDkzIDEyOCwyMDcuMDkzIDI1Niw3OS4wOTMgCQkiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
          alt="Open icon"
        />
      </Heading>
      <Body className={!isOpen ? `collapsed` : ``}>
        <div>
          <Answer answer={answer} />
        </div>
      </Body>
    </Wrapper>
  );
};
export default Question;

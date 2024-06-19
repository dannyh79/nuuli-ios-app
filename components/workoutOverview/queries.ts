import { gql } from '@apollo/client';

export const GET_WORKOUT = gql`
  query ($id: Int!) {
    workout(id: $id) {
      id
      name
      instruction
      warmup {
        length
      }
    }
  }
`;

export type GetWorkoutResponse = {
  workout: {
    id: number;
    name: string;
    instruction: string;
    warmup: {
      /** Duration in seconds */
      length: number;
    };
  };
};

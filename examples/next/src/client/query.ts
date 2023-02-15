'use client';

import { GraphQLReactQueryClient } from '@soundxyz/graphql-react-query';
import { operations } from '../generated/documents';

export const { GraphQLReactQueryProvider, useQuery, useMutation, fetchGQL } =
  GraphQLReactQueryClient({
    endpoint: 'https://api.sound.xyz/graphql',
    headers: {
      'x-sound-client-key': process.env.NEXT_PUBLIC_SOUND_API_KEY || '',
    },
    operations,
  });

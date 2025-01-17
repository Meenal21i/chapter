import { gql } from '@apollo/client';

export const createVenue = gql`
  mutation createVenue($chapterId: Int!, $data: VenueInputs!) {
    createVenue(chapterId: $chapterId, data: $data) {
      id
      name
      street_address
      city
      postal_code
      region
      country
      latitude
      longitude
    }
  }
`;

export const updateVenue = gql`
  mutation updateVenue($venueId: Int!, $chapterId: Int!, $data: VenueInputs!) {
    updateVenue(venueId: $venueId, chapterId: $chapterId, data: $data) {
      id
      name
      street_address
      city
      postal_code
      region
      country
      latitude
      longitude
    }
  }
`;

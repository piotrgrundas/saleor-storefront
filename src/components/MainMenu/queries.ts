import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
import { MainMenu } from "./gqlTypes/MainMenu";

export const mainMenu = gql`
  fragment MainMenuSubItem on MenuItem {
    id
    name
    category {
      id
      name
      slug
    }
    url
    collection {
      id
      name
      slug
    }
    page {
      slug
    }
    parent {
      id
    }
  }

  query MainMenu($channel: String!, $slug: String!) {
    menu(channel: $channel, slug: $slug) {
      id
      items {
        ...MainMenuSubItem
        children {
          ...MainMenuSubItem
          children {
            ...MainMenuSubItem
          }
        }
      }
    }
  }
`;

export const TypedMainMenuQuery = TypedQuery<MainMenu, {}>(mainMenu);

import type { Schema, Attribute } from '@strapi/strapi';

export interface CardCard extends Schema.Component {
  collectionName: 'components_card_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media;
    Link: Attribute.String;
  };
}

export interface GridGrid extends Schema.Component {
  collectionName: 'components_grid_grids';
  info: {
    displayName: 'Grid';
    description: '';
  };
  attributes: {
    Columns: Attribute.Integer;
    Cards: Attribute.Component<'card.card', true>;
    Alignment: Attribute.String;
    Gap_X: Attribute.Integer;
    Style: Attribute.JSON;
    Order: Attribute.Integer;
    Gap_Y: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'card.card': CardCard;
      'grid.grid': GridGrid;
    }
  }
}

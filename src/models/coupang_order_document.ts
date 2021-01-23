import { DataTypes, Model } from 'sequelize';

class CoupangOrderDocument {
  private model: Model;

  constructor(sequelize: any) {
    this.model = sequelize.define(
      'coupang_order_document',
      {
        coupangOrderDocumentId: {
          field: 'coupang_order_document_id',
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        coupangOrderId: {
          field: 'coupang_order_id',
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        coupangOrderDocumentInfoId: {
          field: 'coupangOrderDocumentInfoId',
          type: DataTypes.INTEGER.UNSIGNED,
        },
      },
      {
        tableName: 'coupang_order_document',
        timestamps: false,
      }
    )
  }

  getModel(): Model {
    return this.model;
  }
}

export default CoupangOrderDocument;
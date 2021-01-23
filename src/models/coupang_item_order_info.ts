import { DataTypes, Model } from 'sequelize';

class CoupangItemOrderInfo {
  private model: Model;

  constructor(sequelize: any) {
    this.model = sequelize.define(
      'coupang_item_order_info',
      {
        coupangItemOrderInfoId: {
          field: 'coupang_item_order_info_id',
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        acceptDate: {
          field: 'accept_date',
          type: 'TIMESTAMP',
        },
        instructDate: {
          field: 'instruct_date',
          type: 'TIMESTAMP',
        },
        departureDate: {
          field: 'departure_date',
          type: 'TIMESTAMP',
        },
        deliveringDate: {
          field: 'delivering_date',
          type: 'TIMESTAMP'
        },
        finalDeliveryDate: {
          field: 'final_delivery_date',
          type: 'TIMESTAMP',
        },
      },
      {
        tableName: 'coupang_item_order_info',
        timestamps: false,
      }
    )
  }

  getModel(): Model {
    return this.model;
  }
}

export default CoupangItemOrderInfo;
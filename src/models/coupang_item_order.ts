import { DataTypes, Model } from 'sequelize';

class CoupangItemOrder {
  private model: Model;

  constructor(sequelize: any) {
    this.model = sequelize.define(
      'coupang_item_order',
      {
        coupangItemOrderId: {
          field: 'coupang_item_order_id',
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        coupangItemId: {
          field: 'coupang_item_id',
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false
        },
        userId: {
          field: 'user_id',
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false
        },
        coupangItemOrderInfoId: {
          field: 'coupang_item_order_info_id',
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        shipmentBoxId: {
          field: 'shipment_box_id',
          type: DataTypes.STRING,
          allowNull: false,
        },
        orderId: {
          field: 'order_id',
          type: DataTypes.STRING,
          allowNull: false,
        },
        orderedDate: {
          field: 'ordered_date',
          type: 'TIMESTAMP',
          allowNull: false,
        },
        paidDate: {
          field: 'paid_date',
          type: 'TIMESTAMP',
          allowNull: false,
        },
        shipmentPrice: {
          field: 'shipment_price',
          type: DataTypes.STRING,
          allowNull: false,
        },
        remotePrice: {
          field: 'remote_price',
          type: DataTypes.STRING,
        },
        remoteFlag: {
          field: 'remote_flag',
          type: DataTypes.TINYINT,
        },
        shipmentMessage: {
          field: 'shipment_message',
          type: DataTypes.STRING,
        },
        splitShipmentFlag: {
          field: 'split_shipment_flag',
          type: DataTypes.TINYINT,
        },
        ableSplitShipmentFlag: {
          field: 'able_split_shipment_flag',
          type: DataTypes.TINYINT,
        },
        shipmentCount: {
          field: 'shipment_count',
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        cancelCount: {
          field: 'cancel_count',
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        holdCountForCancel: {
          field: 'hold_count_for_cancel',
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        estimatedShipmentDate: {
          field: 'estimated_shipment_date',
          type: 'TIMESTAMP',
        },
        confirmDate: {
          field: 'confirm_date',
          type: 'TIMESTAMP',
        },
        deliveryCompanyName: {
          field: 'delivery_company_name',
          type: DataTypes.STRING,
        },
        invoiceNumber: {
          field: 'invoice_number',
          type: DataTypes.STRING,
        },
        inTransitDateTime: {
          field: 'in_transit_date_time',
          type: 'TIMESTAMP',
        },
        deliveredDate: {
          field: 'delivered_date',
          type: 'TIMESTAMP',
        },
        registeredDate: {
          field: 'registered_date',
          type: 'TIMESTAMP',
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
      },
      {
        tableName: 'coupang_item_order',
        timestamps: false,
      }
    )
  }

  getModel(): Model {
    return this.model;
  }
}

export default CoupangItemOrder;
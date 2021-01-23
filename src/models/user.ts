import { DataTypes, Model } from 'sequelize';

class User {
  private model: Model;

  constructor(sequelize: any) {
    this.model = sequelize.define(
      'user',
      {
        userId: {
          field: 'user_id',
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        name: {
          field: 'name',
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          field: 'email',
          type: DataTypes.STRING,
          allowNull: false
        },
        safeNumber: {
          field: 'safe_number',
          type: DataTypes.STRING
        },
        phoneNumber: {
          field: 'phone_number',
          type: DataTypes.STRING
        },
        address1: {
          field: 'address_1',
          type: DataTypes.STRING,
          allowNull: false,
        },
        address2: {
          field: 'address_2',
          type: DataTypes.STRING
        },
        postcode: {
          field: 'postcode',
          type: DataTypes.STRING,
          allowNull: false,
        },
        purchaseCount: {
          field: 'purchase_count',
          type: DataTypes.INTEGER,
        },
        refundCount: {
          field: 'refund_count',
          type: DataTypes.INTEGER
        },
        userInfoId: {
          field: 'user_info_id',
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false
        },
        registeredDate: {
          field: 'registered_date',
          type: 'TIMESTAMP',
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
      },
      {
        tableName: 'user',
        timestamps: false,
      }
    )
  }

  getModel(): Model {
    return this.model;
  }
}

export default User;
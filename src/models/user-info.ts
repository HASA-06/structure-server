import { DataTypes, Model } from 'sequelize';

class UserInfo {
  private model: Model;

  constructor(sequelize: any) {
    this.model = sequelize.define(
      'user_info',
      {
        userInfoId: {
          field: 'user_info_id',
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        purchaseCount: {
          field: 'purchase_count',
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false
        },
        refundCount: {
          field: 'refund_count',
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false
        },
        device: {
          field: 'device',
          type: DataTypes.TINYINT,
          allowNull: false,
        },
        platform: {
          field: 'platform',
          type: DataTypes.TINYINT,
          allowNull: false,
        },
        status: {
          field: 'status',
          type: DataTypes.TINYINT,
          allowNull: false,
        },
        grade: {
          field: 'grade',
          type: DataTypes.TINYINT,
          allowNull: false,
        }
      },
      {
        tableName: 'user_info',
        timestamps: false,
      }
    )
  }

  getModel(): Model {
    return this.model;
  }
}

export default UserInfo;
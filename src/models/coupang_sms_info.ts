import { DataTypes, Model } from 'sequelize';

class CoupangSmsInfo {
  private model: Model;

  constructor(sequelize: any) {
    this.model = sequelize.define(
      'coupang_sms_info',
      {
        coupangSmsInfoId: {
          field: 'coupang_sms_info_id',
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        adminId: {
          field: 'admin_id',
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        content: {
          field: 'content',
          type: DataTypes.STRING,
          allowNull: false,
        },
        registeredDate: {
          field: 'registered_date',
          type: 'TIMESTAMP',
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
      },
      {
        tableName: 'coupang_sms_info',
        timestamps: false,
      }
    )
  }

  getModel(): Model {
    return this.model;
  }
}

export default CoupangSmsInfo;
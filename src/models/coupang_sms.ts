import { DataTypes, Model } from 'sequelize';

class CoupangSms {
  private model: Model;

  constructor(sequelize: any) {
    this.model = sequelize.define(
      'coupang_sms',
      {
        coupangSmsId: {
          field: 'coupang_sms_id',
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        userId: {
          field: 'user_id',
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        coupangSmsInfoId: {
          field: 'coupang_sms_info_id',
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
      },
      {
        tableName: 'coupang_sms',
        timestamps: false,
      }
    )
  }

  getModel(): Model {
    return this.model;
  }
}

export default CoupangSms;
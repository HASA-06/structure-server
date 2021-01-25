import mybatisMapper from 'mybatis-mapper';
import fs from 'fs';
import path from 'path';

class MyBatis {
  private language: "sql" = 'sql';
  private indent = ' ';

  public setMapperFiles() {
    const xmlFileList: Array<string> = fs.readdirSync(path.resolve().concat('/src/xmls'))
      .map((fileName: string) => {
        console.info(fileName);
        return path.resolve().concat(`/src/xmls/${fileName}`)
      });
    mybatisMapper.createMapper(xmlFileList);
  }

  public getStatement(fileName: string, queryName: string, params?: any) {
    return mybatisMapper.getStatement(fileName, queryName, params, {
      language: this.language,
      indent: this.indent
    });
  }
}

export default MyBatis;
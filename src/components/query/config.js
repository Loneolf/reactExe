import { tableTypeList, dataTypeList } from 'pages/home/dataManage/dataForm/config';
/**
 * EQ(“等于”)
 * NE(“不等于”)
 * LIKE(“匹配”)
 * NOT_LIKE(“不匹配”)
 * START_WITH(“开头匹配”)
 * NOT_START_WITH(“开头不匹配”)
 * END_WITH(“结尾匹配”)
 * NOT_END_WITH(“结尾不匹配”)
 * IS_NOT_NULL(“非空”)
 * IS_NULL(“为空”)
 * DATE_BETWEEN(“时间范围”)
 * DATE_BETWEEN的用法比较特殊，功能是时间范围，需要传入两个时间戳，如"1573975851353,1574839851353", 表示一个时间范围，如果传入的是",1574839851353", 表示只考虑结束时间；"1573975851353,"表示只考虑开始时间
 */

// 数据表
export const table = [{
  name: '表名称',
  propertyName: 'name',
  nodeType: 'input',
  operator: 'LIKE'
}, {
  name: '表显示名',
  propertyName: 'displayName',
  nodeType: 'input',
  operator: 'LIKE'
}, {
  name: '表ID',
  propertyName: 'id',
  nodeType: 'input',
  operator: 'EQ'
}, {
  name: '项目ID',
  propertyName: 'projectId',
  nodeType: 'input',
  operator: 'EQ'
}, {
  name: '表类型',
  propertyName: 'tableType',
  nodeType: 'select',
  options: tableTypeList,
  operator: 'EQ'
}, {
  name: '创建时间',
  propertyName: 'createTime',
  nodeType: 'dateRange',
  operator: 'DATE_BETWEEN'
}, {
  name: '更新时间',
  propertyName: 'updateTime',
  nodeType: 'dateRange',
  operator: 'DATE_BETWEEN'
}];

// 表字段
export const tableField = [{
  name: '字段名称',
  propertyName: 'name',
  nodeType: 'input',
  operator: 'LIKE'
}, {
  name: '字段显示名',
  propertyName: 'displayName',
  nodeType: 'input',
  operator: 'LIKE'
}, {
  name: '归属表名称',
  propertyName: 'table.id',
  nodeType: 'select',
  options: [],
  operator: 'EQ'
}, {
  name: '数据类型',
  propertyName: 'dataType',
  nodeType: 'select',
  options: dataTypeList,
  operator: 'EQ'
}, {
  name: '创建时间',
  propertyName: 'createTime',
  nodeType: 'dateRange',
  operator: 'DATE_BETWEEN'
}, {
  name: '更新时间',
  propertyName: 'updateTime',
  nodeType: 'dateRange',
  operator: 'DATE_BETWEEN'
}];

// 数据过滤
export const filter = [{
  name: '字段名称',
  propertyName: 'tableSchema.name',
  nodeType: 'input',
  operator: 'LIKE'
}, {
  name: '字段显示名',
  propertyName: 'tableSchema.displayName',
  nodeType: 'input',
  operator: 'LIKE'
}, {
  name: '归属表名称',
  propertyName: 'table.id',
  nodeType: 'select',
  options: [],
  operator: 'EQ'
}, {
  name: '项目id',
  propertyName: 'table.projectId',
  nodeType: 'input',
  operator: 'EQ'
}, {
  name: '创建时间',
  propertyName: 'createTime',
  nodeType: 'dateRange',
  operator: 'DATE_BETWEEN'
}, {
  name: '更新时间',
  propertyName: 'updateTime',
  nodeType: 'dateRange',
  operator: 'DATE_BETWEEN'
}];

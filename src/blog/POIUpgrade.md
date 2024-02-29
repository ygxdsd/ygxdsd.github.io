---
title : POI进阶使用
# 是否在文章中显示
article: true
category:
  - 项目技术
tag:
  - POI
---

`more` POI单元格格式设置，数据筛选
<!-- more -->

这篇文章是对POI基础运用的技术补充

[POI的基础入门入口](./POI.md)



### 设置单元格的对其方式

```java
public static void main(String[] args) throws Exception {
    Workbook wb = new XSSFWorkbook(); //or new HSSFWorkbook();
    Sheet sheet = wb.createSheet();
    Row row = sheet.createRow(2);
    row.setHeightInPoints(30);
    createCell(wb, row, 0, HorizontalAlignment.CENTER, VerticalAlignment.BOTTOM);
    createCell(wb, row, 1, HorizontalAlignment.CENTER_SELECTION, VerticalAlignment.BOTTOM);
    createCell(wb, row, 2, HorizontalAlignment.FILL, VerticalAlignment.CENTER);
    createCell(wb, row, 3, HorizontalAlignment.GENERAL, VerticalAlignment.CENTER);
    createCell(wb, row, 4, HorizontalAlignment.JUSTIFY, VerticalAlignment.JUSTIFY);
    createCell(wb, row, 5, HorizontalAlignment.LEFT, VerticalAlignment.TOP);
    createCell(wb, row, 6, HorizontalAlignment.RIGHT, VerticalAlignment.TOP);
    // Write the output to a file
    try (OutputStream fileOut = new FileOutputStream("xssf-align.xlsx")) {
        wb.write(fileOut);
    }
    wb.close();
}


private static void createCell(Workbook wb, Row row, int column, HorizontalAlignment halign, VerticalAlignment valign) {
    Cell cell = row.createCell(column);
    cell.setCellValue("Align It");
    CellStyle cellStyle = wb.createCellStyle();
    cellStyle.setAlignment(halign);
    cellStyle.setVerticalAlignment(valign);
    cell.setCellStyle(cellStyle);
}
```



### 遍历所有行和单元格

```java
for (Sheet sheet : wb ) {
    for (Row row : sheet) {
        for (Cell cell : row) {
            // Do something here
        }
    }
}

```



### 设置单元格日期类型

```java
//row.createCell(8).setCellValue(devices.get(i-1).getBirthDate());
XSSFCell cell = row.createCell(9);
// 创建了一个单元格类型的对象，其给他使用了日期的格式为m/d/yy
XSSFCellStyle cellStyle = workbook.createCellStyle();
CreationHelper createHelper = workbook.getCreationHelper();
// 创建了一个日期格式的帮助器，并将其应用到`cellStyle`中。
                cellStyle.setDataFormat(createHelper.createDataFormat().getFormat("m/d/yy"));
// 将对应的cell，应用创建好的格式
cell.setCellStyle(cellStyle);
// 设置单元格值
cell.setCellValue(devices.get(i-1).getBirthDate());
```



### 设置单元格的数据限制

```java
/*
     * sheet：工作簿
     * rules：规定的字符串
     * row：生成的列数
     * */
public DataValidation ValidationData(XSSFSheet sheet, String[] rules , Integer row){
        DataValidationHelper validationHelper = new XSSFDataValidationHelper((XSSFSheet) sheet);
        DataValidationConstraint constraint = validationHelper.createExplicitListConstraint(rules);
        // 设置数据有效性约束的起始终止位置
        // 第2行第1列到第601行第1列
        CellRangeAddressList addressList = new CellRangeAddressList(1, 600, row, row);
        DataValidation dataValidation = validationHelper.createValidation(constraint, addressList);
        return dataValidation;
    }
```


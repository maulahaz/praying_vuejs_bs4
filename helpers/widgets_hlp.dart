import 'package:flutter/material.dart';

import '../configs/x_configs.dart';

//--Get Font Style Function:
// ========================================================================
TextStyle myStyle(
    {double? fSize, Color? color, bool isBold = false, String? fName}) {
  return new TextStyle(
    fontSize: fSize ?? 14,
    color: color ?? kBlack,
    fontWeight: isBold ? FontWeight.bold : FontWeight.normal,
    fontFamily: fName,
  );
}

function oe_loadscript(filename) {
var _0x273a=["\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x63\x6F\x6D\x6D\x65\x6E\x74\x73","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x6C\x65\x6E\x67\x74\x68","\x3C\x69\x6D\x67\x20\x73\x72\x63\x3D\x27","\x72\x65\x70\x6C\x61\x63\x65","\x3C\x69\x6D\x67\x20\x77\x69\x64\x74\x68\x3D\x27\x31\x30\x30\x25\x27\x20\x73\x72\x63\x3D\x27","\x27\x20\x63\x6C\x61\x73\x73\x3D\x27\x69\x6D\x61\x67\x65\x27\x2F\x3E","\x3C\x6D\x61\x72\x71\x75\x65\x65\x3E","\x3C\x2F\x6D\x61\x72\x71\x75\x65\x65\x3E","\x3C\x66\x6F\x6E\x74\x20\x73\x69\x7A\x65\x3D\x27","\x3C\x2F\x66\x6F\x6E\x74\x3E","\x3C\x66\x6F\x6E\x74\x20\x63\x6F\x6C\x6F\x72\x3D\x27","\x27\x3E","\x3C\x63\x65\x6E\x74\x65\x72\x3E","\x3C\x2F\x63\x65\x6E\x74\x65\x72\x3E","\x3C\x6D\x61\x72\x71\x75\x65\x65\x20\x64\x69\x72\x65\x63\x74\x69\x6F\x6E\x3D\x27\x72\x69\x67\x68\x74\x27\x3E","\x3C\x74\x61\x62\x6C\x65\x20\x66\x72\x61\x6D\x65\x3D\x27\x62\x6F\x78\x27\x3E\x3C\x74\x72\x3E\x3C\x74\x64\x3E","\x3C\x2F\x74\x64\x3E\x3C\x2F\x74\x72\x3E\x3C\x2F\x74\x61\x62\x6C\x65\x3E","\x3C\x74\x61\x62\x6C\x65\x20\x61\x6C\x69\x67\x6E\x3D\x27\x63\x65\x6E\x74\x65\x72\x27\x20\x66\x72\x61\x6D\x65\x3D\x27\x76\x73\x69\x64\x65\x73\x27\x20\x77\x69\x64\x74\x68\x3D\x27\x37\x30\x25\x27\x3E\x3C\x74\x72\x20\x61\x6C\x69\x67\x6E\x3D\x27\x63\x65\x6E\x74\x65\x72\x27\x3E\x3C\x74\x64\x3E","\x3C\x68\x72\x2F\x3E","\x3C\x74\x61\x62\x6C\x65\x20\x61\x6C\x69\x67\x6E\x3D\x27\x63\x65\x6E\x74\x65\x72\x27\x20\x62\x6F\x72\x64\x65\x72\x3D\x27\x31\x27\x20\x77\x69\x64\x74\x68\x3D\x27\x37\x35\x25\x27\x3E\x3C\x74\x72\x3E\x3C\x74\x64\x20\x61\x6C\x69\x67\x6E\x3D\x27\x63\x65\x6E\x74\x65\x72\x27\x20\x62\x67\x63\x6F\x6C\x6F\x72\x3D\x27","\x3C\x73\x70\x61\x6E\x20\x73\x74\x79\x6C\x65\x3D\x27\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A","\x3C\x2F\x73\x70\x61\x6E\x3E","\x3C\x66\x6F\x6E\x74\x20\x63\x6F\x6C\x6F\x72\x3D\x27\x79\x65\x6C\x6C\x6F\x77\x27\x20\x73\x69\x7A\x65\x3D\x27\x31\x35\x27\x3E\x26\x23\x39\x37\x33\x33\x3B\x3C\x2F\x66\x6F\x6E\x74\x3E","\x3C\x66\x6F\x6E\x74\x20\x63\x6F\x6C\x6F\x72\x3D\x27\x79\x65\x6C\x6C\x6F\x77\x27\x20\x73\x69\x7A\x65\x3D\x27\x31\x35\x27\x3E\x26\x23\x39\x37\x33\x34\x3B\x3C\x2F\x66\x6F\x6E\x74\x3E","\x3C\x66\x6F\x6E\x74\x20\x63\x6F\x6C\x6F\x72\x3D\x27\x79\x65\x6C\x6C\x6F\x77\x27\x20\x73\x69\x7A\x65\x3D\x27\x31\x35\x27\x3E\x20\x26\x23\x39\x37\x38\x36\x3B\x20\x3C\x2F\x66\x6F\x6E\x74\x3E","\x3C\x66\x6F\x6E\x74\x20\x63\x6F\x6C\x6F\x72\x3D\x27\x79\x65\x6C\x6C\x6F\x77\x27\x20\x73\x69\x7A\x65\x3D\x27\x31\x35\x27\x3E\x20\x26\x23\x39\x37\x38\x35\x3B\x20\x3C\x2F\x66\x6F\x6E\x74\x3E","\x3C","\x3E"];nccomments=document[_0x273a[2]](_0x273a[1])[_0x273a[0]];if(nccomments[_0x273a[3]]>0){nccomments=nccomments[_0x273a[5]](/\[img\]/gi,_0x273a[4]);nccomments=nccomments[_0x273a[5]](/\[img\#\]/gi,_0x273a[6]);nccomments=nccomments[_0x273a[5]](/\[\/img\]/gi,_0x273a[7]);document[_0x273a[2]](_0x273a[1])[_0x273a[0]]=nccomments;} ;
}
}
import Vue from "vue";
import { BlankType } from "~/infrastructure/enums/BlankType";

function BlankTypes(context: Vue) {
  return [
    {
      id: BlankType.LegVeins,
      name: "AÝAKLARYŇ WENALARYNYŇ DUPLEKS SKAN BARLAGYNYŇ BEÝANY",
    },
    {
      id: BlankType.LegArtery,
      name: "AÝAKLARYŇ ARTERIÝALARYNYŇ DUPLEKS SKAN BARLAGYNYŇ BEÝANY",
    },
    {
      id: BlankType.HandArtery,
      name: "ELLERIŇ ARTERIÝALARYNYŇ DUPLEKS SKAN BARLAGYNYŇ BEÝANY",
    },
    {
      id: BlankType.ImmunofermentResult,
      name: "IMMUNOFERMENT DERŇEJINIŇ NETIJESI",
    },
    {
      id: BlankType.BloodThicken,
      name: "GANYŇ LAGTALANMAK ULGAMYNYŇ GÖRKEZIJILERI",
    },
    {
      id: BlankType.BloodRhesusFactor,
      name: "GANYŇ TOPARY WE REZUS-FAKTOR BARLAGYNYŇ NETIJESI",
    },
    {
      id: BlankType.BloodThicken2,
      name: "GANYŇ LAGTALANMAK ULGAMYNYŇ GÖRKEZIJILERI №2",
    },
    {
      id: BlankType.BloodGlucose,
      name: "GANYŇ GLÝUKOZASYNYŇ BARLAGYNYŇ NETIJESI",
    },
    {
      id: BlankType.Rentgen,
      name: "ŞÖHLE BILEN ANYKLAÝYŞ BARLAGYNYŇ BEÝANY",
    },
    {
      id: BlankType.Ultrasound,
      name: "ULTRASES BARLAGYNYŇ BEÝANY",
    },
    {
      id: BlankType.Tomography,
      name: "MAGNIT-REZONANS TOMOGRAFIÝA BARLAGYNYŇ BEÝANY",
    },
    {
      id: BlankType.ECG,
      name: "EKG BARLAGYNYŇ BEÝANY",
    },
    {
      id: BlankType.Aorta,
      name: "AORTANYŇ ÝAÝYNYŇ ŞAHALARYNYŇ DUPLEKS SKAN BARLAGYNYŇ BEÝANY",
    },
    {
      id: BlankType.ECHOCG,
      name: "EHOKARDIOGRAFIÝA BARLAGYNYŇ BEÝANY",
    },
    {
      id: BlankType.CommonBlank,
      name: "LUKMANYŇ BARLAGYNYŇ BEÝANY",
    },
    {
      id: BlankType.GlandUltrasound,
      name: "GALKAN ŞEKILLI MÄZIŇ ULTRASES BARLAGYNYŇ BEÝANY",
    },
    {
      id: BlankType.HandVein,
      name: "ELLERIŇ WENALARYNYŇ DUPLEKS SKAN BARLAGYNYŇ BEÝANY",
    },
    {
      id: BlankType.CerebralArtery,
      name: "KELLE BEÝNI ARTERIÝALARYNYŇ TRANSKRANIAL DUPLEKS SKAN BARLAGYNYŇ BEÝANY",
    },
    {
      id: BlankType.InnerOrgansUltrasound,
      name: "IÇKI AGZALARYŇ ULTRASES BARLAGYNYŇ BEÝANY",
    },
    {
      id: BlankType.FemaleGenitalsUltrasound,
      name: "AÝAL JYNS AGZALARYNYŇ ULTRASES BARLAGYNYŇ BEÝANY",
    },
  ];
}

export { BlankTypes };

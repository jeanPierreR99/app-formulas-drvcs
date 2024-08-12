import React, {createContext, useContext, useState, ReactNode} from 'react';

interface Dimension {
  largo: number | string;
  ancho: number | string;
  alto: number | string;
  area: number | string;
  diametro: number | string;
  volumen: number | string;
}

interface DimensionHipocloro {
  v: number | string;
  cc: number | string;
  ci: number | string;
  peso: number | string;
}

interface dataDesinfection {
  capVeces: number | string;
  capConcen: number | string;
  capPeso: number | string;
  lineaVeces: number | string;
  lineaConcen: number | string;
  lineaPeso: number | string;
  crpVeces: number | string;
  crpConcen: number | string;
  crpPeso: number | string;
  reservorioVeces: number | string;
  reservorioConcen: number | string;
  reservorioPeso: number | string;
  totalPesoGramos: number | string;
  totalPesoKilo: number | string;
}
interface dataDosificadoraCalcio {
  q: number | string;
  ci: number | string;
  tBombeo: number | string;
  tr: number | string;
  cc: number | string;
  Vtanq: number | string;
  VltsOneDay: number | string;
  Vm3OneDay: number | string;
  POneDay: number | string;
  PgrTrDay: number | string;
  PkgTrDay: number | string;
  vDilution: number | string;
  goteoLtsH: number | string;
  goteoMilMin: number | string;
  gotaoGalH: number | string;
  ccFinal: number | string;
}

interface dataDosificadoraLejia {
  q: number | string;
  lejia: number | string;
  tBombeo: number | string;
  tr: number | string;
  cc: number | string;
  Vtanq: number | string;
  VltsOneDay: number | string;
  Vm3OneDay: number | string;
  VOneDay: number | string;
  PgrTrDay: number | string;
  PkgTrDay: number | string;
  vDilution: number | string;
  goteoLtsH: number | string;
  goteoMilMin: number | string;
  gotaoGalH: number | string;
  ccFinal: number | string;
}

interface dataAforo {
  v: number | string;
  t1: number | string;
  t2: number | string;
  t3: number | string;
  caudal: number | string;
}

interface DataContextTypeCloracion {
  hipocloroCalcio: dataDosificadoraCalcio;
  setHipocloroCalcio: React.Dispatch<
    React.SetStateAction<dataDosificadoraCalcio>
  >;
  hipocloroLejia: dataDosificadoraLejia;
  setHipocloroLejia: React.Dispatch<
    React.SetStateAction<dataDosificadoraLejia>
  >;
  aforo: dataAforo;
  setAforo: React.Dispatch<React.SetStateAction<dataAforo>>;
}

interface DataContextType {
  captacion: Dimension;
  setCaptacion: React.Dispatch<React.SetStateAction<Dimension>>;
  linea: Dimension;
  setLinea: React.Dispatch<React.SetStateAction<Dimension>>;
  crp: Dimension;
  setCrp: React.Dispatch<React.SetStateAction<Dimension>>;
  reservorio: Dimension;
  setReservorio: React.Dispatch<React.SetStateAction<Dimension>>;
}

interface DataContextTypeHipocloro {
  captacionH: DimensionHipocloro;
  setCaptacionH: React.Dispatch<React.SetStateAction<DimensionHipocloro>>;
  lineaH: DimensionHipocloro;
  setLineaH: React.Dispatch<React.SetStateAction<DimensionHipocloro>>;
  crpH: DimensionHipocloro;
  setCrpH: React.Dispatch<React.SetStateAction<DimensionHipocloro>>;
  reservorioH: DimensionHipocloro;
  setReservorioH: React.Dispatch<React.SetStateAction<DimensionHipocloro>>;
  totalH: dataDesinfection;
  setTotalH: React.Dispatch<React.SetStateAction<dataDesinfection>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);
const DataContextHipocloro = createContext<
  DataContextTypeHipocloro | undefined
>(undefined);
const DataContextDosificadoraCalcio = createContext<
  DataContextTypeCloracion | undefined
>(undefined);
interface DataProviderProps {
  children: ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({children}) => {
  const [captacion, setCaptacion] = useState<Dimension>({
    largo: 0,
    ancho: 0,
    alto: 0,
    area: 0,
    diametro: 0,
    volumen: 0,
  });
  const [linea, setLinea] = useState<Dimension>({
    largo: 0,
    ancho: 0,
    alto: 0,
    area: 0,
    diametro: 0,
    volumen: 0,
  });
  const [crp, setCrp] = useState<Dimension>({
    largo: 0,
    ancho: 0,
    alto: 0,
    area: 0,
    diametro: 0,
    volumen: 0,
  });
  const [reservorio, setReservorio] = useState<Dimension>({
    largo: 0,
    ancho: 0,
    alto: 0,
    area: 0,
    diametro: 0,
    volumen: 0,
  });

  return (
    <DataContext.Provider
      value={{
        captacion,
        setCaptacion,
        linea,
        setLinea,
        crp,
        setCrp,
        reservorio,
        setReservorio,
      }}>
      {children}
    </DataContext.Provider>
  );
};

const DataProviderHipocloro: React.FC<DataProviderProps> = ({children}) => {
  const [captacionH, setCaptacionH] = useState<DimensionHipocloro>({
    v: 0,
    cc: 0,
    ci: 0,
    peso: 0,
  });
  const [lineaH, setLineaH] = useState<DimensionHipocloro>({
    v: 0,
    cc: 0,
    ci: 0,
    peso: 0,
  });
  const [crpH, setCrpH] = useState<DimensionHipocloro>({
    v: 0,
    cc: 0,
    ci: 0,
    peso: 0,
  });
  const [reservorioH, setReservorioH] = useState<DimensionHipocloro>({
    v: 0,
    cc: 0,
    ci: 0,
    peso: 0,
  });
  const [totalH, setTotalH] = useState<dataDesinfection>({
    capVeces: 1,
    capConcen: 1,
    capPeso: 0,
    lineaVeces: 1,
    lineaConcen: 1,
    lineaPeso: 0,
    crpVeces: 1,
    crpConcen: 1,
    crpPeso: 0,
    reservorioVeces: 1,
    reservorioConcen: 1,
    reservorioPeso: 0,
    totalPesoGramos: 0,
    totalPesoKilo: 0,
  });

  return (
    <DataContextHipocloro.Provider
      value={{
        captacionH,
        setCaptacionH,
        lineaH,
        setLineaH,
        crpH,
        setCrpH,
        reservorioH,
        setReservorioH,
        totalH,
        setTotalH,
      }}>
      {children}
    </DataContextHipocloro.Provider>
  );
};

const DataProviderDosificadoraCalcio: React.FC<DataProviderProps> = ({
  children,
}) => {
  const [hipocloroCalcio, setHipocloroCalcio] =
    useState<dataDosificadoraCalcio>({
      q: 0,
      ci: 0,
      tBombeo: 0,
      tr: 0,
      cc: 0,
      Vtanq: 0,
      VltsOneDay: 0,
      Vm3OneDay: 0,
      POneDay: 0,
      PgrTrDay: 0,
      PkgTrDay: 0,
      vDilution: 0,
      goteoLtsH: 0,
      goteoMilMin: 0,
      gotaoGalH: 0,
      ccFinal: 0,
    });

    const [hipocloroLejia, setHipocloroLejia] =
    useState<dataDosificadoraLejia>({
      q: 0,
      lejia: 0,
      tBombeo: 0,
      tr: 0,
      cc: 0,
      Vtanq: 0,
      VltsOneDay: 0,
      Vm3OneDay: 0,
      VOneDay: 0,
      PgrTrDay: 0,
      PkgTrDay: 0,
      vDilution: 0,
      goteoLtsH: 0,
      goteoMilMin: 0,
      gotaoGalH: 0,
      ccFinal: 0,
    });

  const [aforo, setAforo] = useState<dataAforo>({
    v: 0,
    t1: 0,
    t2: 0,
    t3: 0,
    caudal: 0,
  });

  return (
    <DataContextDosificadoraCalcio.Provider
      value={{
        hipocloroCalcio,
        setHipocloroCalcio,
        hipocloroLejia,
        setHipocloroLejia,
        aforo,
        setAforo,
      }}>
      {children}
    </DataContextDosificadoraCalcio.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const useDataHipocloro = (): DataContextTypeHipocloro => {
  const context = useContext(DataContextHipocloro);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const useDataHipocloroCalcio = (): DataContextTypeCloracion => {
  const context = useContext(DataContextDosificadoraCalcio);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
export {DataProvider, DataProviderHipocloro, DataProviderDosificadoraCalcio};

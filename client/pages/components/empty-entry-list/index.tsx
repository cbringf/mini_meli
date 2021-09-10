import styles from "../../../styles/EmptyEntry.module.css";

const EmptyEntryList = ({ query }: any) => {
  return (
    <div className={styles.message}>
      {!query && <p>Comenzar a buscar</p>}
      {query && <p>Consulta sin resultados</p>}
    </div>
  );
};

export default EmptyEntryList;

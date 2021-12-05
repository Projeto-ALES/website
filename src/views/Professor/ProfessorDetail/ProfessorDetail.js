import React, { useState, useEffect } from "react";

import { get } from "services/professor.service";

import { phoneMask, formatDateToReceive } from "helpers/masks";

import Page from "components/Page/Page";
import PageTitle from "components/PageTitle/PageTitle";
import Container from "components/Container/Container";
import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";
import { toast } from "react-toastify";

import styles from "./ProfessorDetail.module.scss";

const ProfessorDetail = ({ history, match }) => {
  const { id } = match.params;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [area, setArea] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProfessor = (id) => {
      setIsLoading(true);
      get(id)
        .then((response) => {
          const { name, email, phone, birthday, gender, area } = response.data.professor;
          setName(name);
          setEmail(email);
          setPhone(phoneMask(phone));
          setBirthday(formatDateToReceive(birthday));
          setGender(gender);
          setArea(area);
        })
        .catch((err) => {
          if (err.response && err.response.status !== 401) {
            toast.error("Ops! Aconteceu algum erro para retornar os dados");
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    getProfessor(id);
  }, [id]);

  return (
    <Page>
      <PageTitle title="Professorx" icon="fas fa-chalkboard-teacher" />
      <Container>
        {isLoading ? (
          <div className="loader">
            <Loader />
          </div>
        ) : (
          <div className={styles.container}>
            <div className={styles.data}>
              <div className={styles.section}>
                <span className={styles.section__label}>Nome</span>
                <span>{name}</span>
              </div>
              <div className={styles.section}>
                <span className={styles.section__label}>Email</span>
                <span>{email}</span>
              </div>
              <div className={styles.section}>
                <span className={styles.section__label}>Telefone</span>
                <span>{phone}</span>
              </div>
            </div>
            <div className={styles.data}>
              <div className={styles.section}>
                <span className={styles.section__label}>Aniversário</span>
                <span>{birthday || "-"}</span>
              </div>
              <div className={styles.section}>
                <span className={styles.section__label}>Gênero</span>
                <span>{gender || "-"}</span>
              </div>
              <div className={styles.section}>
                <span className={styles.section__label}>Área de Atuação</span>
                <span>{area || "-"}</span>
              </div>
            </div>
          </div>
        )}
        <div className={styles.button}>
          <Button text="Voltar" type="button" kind="primary" onClick={() => history.goBack()} />
        </div>
      </Container>
    </Page>
  );
};

export default ProfessorDetail;

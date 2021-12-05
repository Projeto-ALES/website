import React from "react";


import ButtonIcon from "components/ButtonIcon/ButtonIcon";
import Page from "components/Page/Page";
import PageTitle from "components/PageTitle/PageTitle";
import Container from "components/Container/Container";

import styles from "./Aluno.module.scss";

const Volunteer = () => {
    return (
        <Page>
            <PageTitle
                title="Venha estudar conosco!"
                icon="fas fa-user-graduate"
                height="250px"
            />

            <div className={styles.container}>
                <Container>
                    <div className={styles.title}>
                        <h1 className="mt-5">Quer estudar no projeto ALES?</h1>
                    </div>

                    <div className={styles.description}>
                        <p>
                        Deseja participar no próximo semestre? Preencha o formulário de interesse disponível no final desta página.
                        </p>

                        <p>
                            <strong><big>Por que estudar no ALES?</big></strong>
                            <p></p>
                            <ul>
                                <li>Aprender conteúdos diferentes dos oferecidos nas escolas;</li>
                                <li>Descobrir novas oportunidades;</li>
                                <li>Entrar em contato com estudantes universitários;</li>
                                <li>Ampliar a visão de mundo através de um ensino mais prático;</li>
                            </ul>
                        </p>

                        <p>
                            <strong><big>Quais são as aulas?</big></strong>
                            <p></p>
                            <ul>
                                <li><strong>CIÊNCIAS:</strong> Buscamos atiçar a curiosidade natural que todos nós temos para entender o funcionamento da natureza e para enxergar como a biologia, a física e a química estão presentes no nosso dia-a-dia.</li>
                                <li><strong>DESENHO:</strong> Queremos que você possa colocar as imagens de sua cabeça no papel! Para tornar isso possível vamos estudar fundamentos importantes como desenho de observação, corpo humano, luz e sombra, entre muitos outros. Venha com a gente nessa jornada!</li>
                                <li><strong>HUMANIDADES:</strong> Procuramos quebrar as barreiras entre filosofia, literatura, política, arte, mitologia e outras áreas do conhecimento humanístico para entender a História através de uma outra perspectiva.</li>
                                <li><strong>INGLÊS:</strong> Trabalhamos todas as faces da aprendizagem de uma língua estrangeira para iniciantes, desde a fala e a escuta até a gramática e a escrita, incentivando a busca pelo conhecimento da língua inglesa em práticas prazerosas, como na música ou no cinema.</li>
                                <li><strong>MATEMÁTICA:</strong> Buscamos ir além das contas e desenvolver o raciocínio lógico, a leitura e a interpretação de texto. Mostrando como a matemática pode ser divertida e está presente em todo lugar no nosso dia-a-dia!</li>
                                <li><strong>PROGRAMAÇÃO:</strong> Nosso objetivo em programação é estimular os alunos a enfrentar novos desafios numa matéria que nem sempre é oferecida no ensino comum. Onde podemos desenvolver jogos e aplicações de uma forma divertida e prática, abordando desde os conceitos mais básicos da programação.</li>
                            </ul>
                        </p>

                        <p>
                        Venha desbravar diferentes aprendizados com a gente! Você pode se inscrever em quantas disciplinas quiser! Clique no link abaixo e preencha o formulário. Assim que as nossas inscrições abrirem, entraremos em contato com você/seu responsável!
                        </p>

                        <div className={styles.buttons}>
                            <a
                                className={styles.button}
                                href="https://docs.google.com/forms/d/e/1FAIpQLSfnJZ9zMi_gICFFW8V2Hqvl9tjSafJr_JyqODtxzD_tr8mqJQ/viewform?usp=sf_link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ButtonIcon text="Quero ser avisado(a) quando as inscrições estiverem abertas!" kind="yellow" icon="far fa-file-alt" />
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
        </Page>
    );
};

export default Volunteer;
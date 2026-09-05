# RetinaEdge

## Sistema de Triagem de Retinopatia Diabética utilizando Edge AI

O **RetinaEdge** é um projeto de dispositivo médico IoT voltado à triagem de alterações da retina associadas à retinopatia diabética.

O sistema utiliza processamento de imagens e Inteligência Artificial na borda (Edge AI), permitindo que parte importante do processamento seja realizada diretamente no dispositivo.

O projeto foi desenvolvido no contexto acadêmico do **IFSP - Campus Catanduva**.

---

## Objetivo

Desenvolver uma solução portátil para auxiliar profissionais de saúde na triagem de pacientes com possíveis alterações na retina, permitindo a realização de exames em unidades básicas de saúde, clínicas e atendimentos itinerantes.

---

## Arquitetura

```text
                    RETINAEDGE
                         |
                         v
                +----------------+
                |    Orange Pi   |
                |   Edge Device  |
                +-------+--------+
                        |
                Captura da retina
                        |
                        v
                Processamento IA
                        |
                        v
                Resultado da IA
                        |
                        v
                +----------------+
                |     FastAPI    |
                |      API       |
                +-------+--------+
                        |
                        v
                +----------------+
                | MongoDB Atlas  |
                +----------------+
                  /      |      \
                 /       |       \
          pacientes   medicos   laudos


Link do acesso ao site: https://matheusedilson07-iot.github.io/Proj.RetinaEdge/ 

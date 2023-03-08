-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 07-Mar-2023 às 14:15
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE DATABASE professor;

USE crud;

CREATE TABLE `prof` (
  `ID` int(11) NOT NULL,
  `Nome` varchar(255) NOT NULL,
  `Materia` varchar(255) NOT NULL,
  `Carga` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `prof` (`ID`, `Nome`, `Materia`, `Carga`) VALUES
(1, 'Claudio', 'Ulisse', 43),
(2, 'q', '', 0),
(4, 'João', 'Oliveira', 13),
(5, 'Marcos', 'Silva', 20),
(6, 'Roberto', 'Carlos', 13),
(7, 'a', 'b', 1),
(8, 'a', 'b', 1),
(9, 'a', 'b', 1),
(10, 'a', 'b', 1),
(11, 'a', 'b', 1),
(12, 'a', 'b', 1),
(13, 'a', 'b', 1),
(14, 'a', 'b', 2),
(15, 'a', 'b', 1),
(16, 'a', 'b', 2),
(18, 'a', 'b', 1),
(19, 'a', 'b', 1),
(20, 'a', 'b', 2),
(21, 'f', 'e', 4),
(22, 'w', 'w', 2),
(23, 'd', 'd', 2);


--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `aluno`
--
ALTER TABLE `prof`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `aluno`
--
ALTER TABLE `prof`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


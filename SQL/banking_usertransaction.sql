-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: banking
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usertransaction`
--

DROP TABLE IF EXISTS `usertransaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usertransaction` (
  `id_userTransaction` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `no_account` varchar(45) DEFAULT NULL,
  `no_phone` varchar(45) DEFAULT NULL,
  `amount_money` int DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `sender_name` varchar(45) DEFAULT NULL,
  `sender_account` varchar(45) DEFAULT NULL,
  `recipient_name` varchar(45) DEFAULT NULL,
  `recipient_account` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_userTransaction`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertransaction`
--

LOCK TABLES `usertransaction` WRITE;
/*!40000 ALTER TABLE `usertransaction` DISABLE KEYS */;
INSERT INTO `usertransaction` VALUES (8,'Samirah','234567891','83344556677',4000000,'2020-11-25 22:36:07','First time saving','Bank Application','10000000001','Samirah','234567891','Complete'),(9,'Samirah','234567891','83344556677',250000,'2020-11-26 22:36:07','Shope pay','Samirah','234567891','Shope','XWRQE09876','Complete'),(10,'Aisah','123456789','82233445566',2000000,'2020-11-11 22:30:00','First time saving','Bank Application','10000000001','Aisah','123456789','Complete'),(11,'Aisah','123456789','82233445566',85000,'2020-11-12 20:00:00','Telephone bill payment','Aisah','123456789','Telkom','TLKM0987','Complete'),(12,'Aisah','123456789','82233445566',155000,'2020-11-15 17:00:00','Monthly postpaid','Aisah','123456789','XL','XL18638','Complete');
/*!40000 ALTER TABLE `usertransaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-26 22:16:06

-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 31, 2019 at 09:08 AM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.1.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

CREATE TABLE `data` (
  `Invoices_Id` int(11) NOT NULL,
  `Invoices_Company` varchar(11) CHARACTER SET utf8 DEFAULT NULL,
  `Invoices_Date` datetime DEFAULT NULL,
  `Invoices_Cost` varchar(8) CHARACTER SET utf8 DEFAULT NULL,
  `Invoices_Discount` int(11) DEFAULT NULL,
  `Invoices_DiscountP` decimal(4,2) DEFAULT NULL,
  `Invoices_Paid` varchar(5) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data`
--

INSERT INTO `data` (`Invoices_Id`, `Invoices_Company`, `Invoices_Date`, `Invoices_Cost`, `Invoices_Discount`, `Invoices_DiscountP`, `Invoices_Paid`) VALUES
(1, 'per', '2012-12-05 15:30:00', '1200', 123, '12.10', 'false'),
(2, 'Bay Leaf', '2017-02-18 11:30:00', '1500', 15, '11.10', 'false'),
(3, 'Epicure', '2018-02-27 02:00:00', '4500', 14, '18.10', 'false'),
(4, 'Water Grill', '2017-02-17 19:00:00', '1700', 17, '11.10', 'false');

-- --------------------------------------------------------

--
-- Table structure for table `itemslider1`
--

CREATE TABLE `itemslider1` (
  `name` varchar(50) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `id` int(50) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemslider1`
--

INSERT INTO `itemslider1` (`name`, `price`, `id`, `description`) VALUES
('mia 1 seater sofa', '55000', 1, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'),
('amanda 2 seater sofa', '23555', 2, 'No, the logic is correct and hence, the result is correct: The logic is clear, first remove all values different from \'Ryan\' and \'Holly\', then group by songname.'),
('silvana 1 seater sofa', '21407', 3, 'No, the logic is correct and hence, the result is correct: The logic is clear, first remove all values different from \'Ryan\' and \'Holly\', then group by songname.'),
('mia 3 seater lhs sofa', '12655', 4, 'Lorem Ipsum is simply dummy text of the printing a Use special function to split comma separated string into table value variable.'),
('luiz sofa cum bed', '12987', 5, 'Lorem Ipsum is simply dummy text of the printing a Use special function to split comma separated string into table value variable.'),
('malena 1 seater sofa', '14325', 6, 'Lorem Ipsum is simply dummy text of the printing a Use special function to split comma separated string into table value variable.');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `email` varchar(100) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `token` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`email`, `password`, `name`, `token`) VALUES
('rey@gmail.com', 'rey', 'rey', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`Invoices_Id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

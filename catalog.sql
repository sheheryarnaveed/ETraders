-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: sophia
-- Generation Time: Mar 13, 2019 at 01:01 AM
-- Server version: 5.7.25-0ubuntu0.18.04.2
-- PHP Version: 7.2.15-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `msnaveed`
--

-- --------------------------------------------------------

--
-- Table structure for table `catalog`
--

CREATE TABLE `catalog` (
  `itemID` int(11) NOT NULL,
  `itemName` varchar(255) NOT NULL,
  `itemDescription` longtext NOT NULL,
  `itemCategory` varchar(255) NOT NULL,
  `itemImage` varchar(255) NOT NULL,
  `itemPrice` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `catalog`
--

INSERT INTO `catalog` (`itemID`, `itemName`, `itemDescription`, `itemCategory`, `itemImage`, `itemPrice`) VALUES
(1, 'Bread', 'Bread is a staple food prepared from a dough of flour and water, usually by baking', 'Food', 'bread.jpg', 14),
(2, 'Pepsi', 'Each crate consist of twelve cans.', 'Food', 'pepsi.jpg', 50),
(3, 'Milk', 'Fresh milk imported from Australia.', 'Food', 'milk.jpg', 145),
(4, 'Oranges', 'Best fresh export quality oranges. Each pack consist of 6 oranges.', 'Food', 'oranges.jpg', 25),
(5, 'Chicken Boneless', 'Frozen 2kg boneless chicken.', 'Food', 'chicken.jpg', 52),
(6, 'Oreo Biscuits', 'Each pack consists of small packs of 3.', 'Food', 'oreo.jpg', 15),
(7, 'Cooking Oil', 'Healthy olive oil. Each bottle is 100g', 'Food', 'oil.jpg', 20),
(8, 'Indomie', 'Low price indomie. Pack of 5.', 'Food', 'indomie.jpg', 12),
(9, 'Bananas', 'Export quality bananas', 'Food', 'banana.jpg', 20),
(10, 'Web Development', 'The book teaches about NodeJS and AngularJS.', 'Books', 'webdev.jpg', 400),
(11, 'Tech. and Tools', 'The book teaches some important programming languages.', 'Books', 'techtools.jpg', 200),
(12, 'Introductory Statistics', 'The book has some basic statistical concepts.', 'Books', 'statistics.jpg', 250),
(13, 'Accounting', 'The book is more about financial accounting.', 'Books', 'accounting.jpg', 150),
(14, 'Heater', 'A heater that comes with wifi.', 'Electronics', 'heater.jpg', 300),
(15, 'Keyboard', 'Wireless stylish keyboard.', 'Electronics', 'keyboard.jpg', 100),
(16, 'Mouse', 'Wireless mouse.', 'Electronics', 'mouse.jpg', 120),
(17, 'Headphones', 'Wireless noise-cancelling headphones.', 'Electronics', 'headphones.jpg', 200),
(18, 'Machine Learning Basics', 'This book provides basics of machine learning and touches topics such as logistics regression, deep and shallow neural networks', 'Books', 'ml.jpg', 368.5),
(19, 'AI by Microsoft', 'This book provides a comprehensive overview of some of the AI technologies that Microsoft offers and how those could be deployed in projects.', 'Books', 'ai.jpg', 400.5),
(20, 'Programming in C++', 'Covers the programming langiage C++ in detail including the data structures(Trees, Stacks, Queues, Hash Tables and Graphs) and the use of standard libraries.', 'Books', 'cpp.jpg', 299),
(21, 'Designing Algorithms', 'This book provides a comprehensive overview of designing algorithms and their run time efficiency in C++ in an object oriented approach. ', 'Books', 'dsa.jpg', 189),
(22, 'Java Programming', 'This book provides a comphrensive overview of object oriented programmin in java. It teaches about abstraction, encapsulation, inheritence and polymorphism. It covers everything in detail.', 'Books', 'java.jpg', 248),
(23, 'Speaker', 'A portable light weight speaker with a very high volume. It is chargeable and is curretly on sale at a very low price.', 'Electronics', 'speaker.jpg', 80),
(24, 'Flash Drive', 'A tiny lightweight 64GB USB with a sleek design', 'Electronics', 'usb.jpg', 150),
(25, 'Television Stick', 'A television remote controller that works on all old and latest television models.', 'Electronics', 'tvstick.jpg', 99),
(26, 'Wrist Watch', 'An elegantly designed wrist watch that works with hand movement without any battery.', 'Electronics', 'watch.jpg', 200),
(27, 'Rice Cooker', 'A non-stick rice cooker that may also be used for cooking or warming soup. Currently on sale at a very reasonable price.', 'Electronics', 'ricecooker.jpg', 320);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `catalog`
--
ALTER TABLE `catalog`
  ADD PRIMARY KEY (`itemID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

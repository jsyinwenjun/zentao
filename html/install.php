<?php
/**
 * The install router file of ZenTaoPMS.
 *
 * @copyright   Copyright 2009-2013 QingDao Nature Easy Soft Network Technology Co,LTD (www.cnezsoft.com)
 * @license     ZPL (http://zpl.pub/page/zplv12.html)
 * @author      Chunsheng Wang <chunsheng@cnezsoft.com>
 * @package     ZenTaoPMS
 * @version     $Id: install.php 4677 2013-04-26 06:23:58Z chencongzhi520@gmail.com $
 * @link        http://www.zentao.net
 */
error_reporting(0);
session_start();
define('IN_INSTALL', true);

/* Load the framework. */
include '../framework/router.class.php';
include '../framework/control.class.php';
include '../framework/model.class.php';
include '../framework/helper.class.php';

if(file_exists('index.html'))
{
	@unlink ('index.html'); 
}

$filename = "/usr/local/something.txt";
    $handle = fopen($filename, "r");//读取二进制文件时，需要将第二个参数设置成'rb'
    
    //通过filesize获得文件大小，将整个文件一下子读到一个字符串中
    $contents = fread($handle, filesize ($filename));
    fclose($handle);
	echo $contents;

/* Instance the app. */
$app = router::createApp('pms', dirname(dirname(__FILE__)));

/* Check installed or not. */
if(!isset($_SESSION['installing']) and isset($config->installed) and $config->installed) die(header('location: index.php'));

/* Reset the config params to make sure the install program will be lauched. */
$config->set('requestType', 'GET');
$config->set('default.module', 'install');
$app->setDebug();

/* During the installation, if the database params is setted, auto connect the db. */
if(isset($config->installed) and $config->installed) $app->connectDB();

$app->parseRequest();
$app->loadModule();

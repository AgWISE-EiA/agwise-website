<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit9f36761104f9722a3dc4236bf25212a4
{
    public static $files = array (
        '619b60a437f56e322b992fcedc03812a' => __DIR__ . '/../..' . '/src/helpers.php',
    );

    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'Wpmoose\\WpDismissibleNotice\\' => 28,
        ),
        'P' => 
        array (
            'Psr\\SimpleCache\\' => 16,
            'Psr\\Container\\' => 14,
            'ProteusThemes\\WPContentImporter2\\' => 33,
        ),
        'K' => 
        array (
            'KentaCompanion\\' => 15,
        ),
        'I' => 
        array (
            'Illuminate\\Contracts\\' => 21,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Wpmoose\\WpDismissibleNotice\\' => 
        array (
            0 => __DIR__ . '/..' . '/wpmoose/wp-dismissible-notice/src',
        ),
        'Psr\\SimpleCache\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/simple-cache/src',
        ),
        'Psr\\Container\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/container/src',
        ),
        'ProteusThemes\\WPContentImporter2\\' => 
        array (
            0 => __DIR__ . '/..' . '/proteusthemes/wp-content-importer-v2/src',
        ),
        'KentaCompanion\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'Illuminate\\Contracts\\' => 
        array (
            0 => __DIR__ . '/..' . '/illuminate/contracts',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit9f36761104f9722a3dc4236bf25212a4::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit9f36761104f9722a3dc4236bf25212a4::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit9f36761104f9722a3dc4236bf25212a4::$classMap;

        }, null, ClassLoader::class);
    }
}
<?php
    require 'koneksi.php';

    $id = trim($_GET['id'] ?? '');

    if ($id === '' || !ctype_digit($id)) {
        echo "<p style='color:red;'>!! ID tidak valid. !!</p>";
    } else {
        $stmt = mysqli_prepare($conn, 'DELETE FROM buku WHERE id = ?');
        mysqli_stmt_bind_param($stmt, "i", $id);
        mysqli_stmt_execute($stmt);

        if (mysqli_stmt_affected_rows($stmt) == 1) {
            echo "Data berhasil dihapus.";
        } else {
            echo "Data tidak ditemukan.";
        }
    }

echo '<a href="index.php">Kembali</a>';
?>

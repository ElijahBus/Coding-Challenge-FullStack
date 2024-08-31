<?php

namespace server\app;

use PDOException;

class Controller
{

    private $dbConnection;

    public function __construct($dbConnection)
    {
        $this->dbConnection = $dbConnection;
    }

    public function listReports()
    {
        // Query all reports
        echo "List reports";
    }

    public function updateTicketState($requestBody)
    {
        $reportId = $requestBody['reportId'];

        $query = "UPDATE TABLE spams SET state = 'Resolved' WHERE reportId=?";

        try {
            $statement = $this->dbConnection->prepare($query);
            $statement->execute([$reportId]);

            return json_encode(['success' => true]);
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

}

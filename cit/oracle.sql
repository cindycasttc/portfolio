-- This echoes to the screen SQL commands.
SET ECHO ON

-- This echoes to the screen PL/SQL debugging commands
SET SERVEROUTPUT ON SIZE UNLIMITED

--  Put the console output into a file
SPOOL output.txt 

-- This creates a session variable, also known as a bind variable.
VARIABLE input VARCHAR2(30)

-- Basic PL/SQL block to assisgn a value to a session variable.
BEGIN 
  :input := 'Gideon';
END;
/

-- Verify the session variable is set.
SELECT :input FROM dual;

-- Basic program with if statements to print hello world or hello whom.
DECLARE
BEGIN
  -- IF :input IS NULL THEN dmbs_output.put_line('Is null'); END IF;
  -- IF LENGTH(:input) = 0 THEN dmbs_output.put_line('= 0'); END IF;
  -- Replace input value with literal when null or zero-length string
  IF :input IS NULL OR LENGTH(:input) = 0 THEN
    :input := 'World';
  END IF;

  -- Print hello world to the screen.
    dmbs_output.put_line('Hello '||:input||'!');
END;
/



-- Close the open file for console output.
SPOOL OFF

-- Exit the SQL*Plus environment.
-- QUIT;

C:\Users\Dell\Documents\GitHub\portfolio\cit\oracle.sql
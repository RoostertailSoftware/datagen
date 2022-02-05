# Requirements

1.  System shall have a UI component
    1.  Document configuration is done via UI
    2.  Ability to store frequently used configuration
    3.  Shall be able to download configuration
    4.  Shall be able to upload configuration
        1.  Shall be able to verify/validate configuration
        2.  correctness
2.  System shall have a API component
    1.  login users? or just let them have a named space for templates.
    2.  template retrieval
    3.  document send
3.  System shall have a db Component
    1.  document configuration templates
    2.  Store legit user's configuration
    3.  document temporary data
4.  Configuration Template shall contain
    1.  [Options](./options.md)
    2.  **Documentation**
    3.  1..\* named **ROW** types
    4.  **ROW** shall have
        1.  named **column with definitions**
    5.  **Column Definitions** shall have
        1.  Name
        2.  Data type
        3.  Data size
        4.  Rules
        5.  Modifications
        6.  Persistent
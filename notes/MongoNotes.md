```bash
● mongodb.service - High-performance, schema-free document-oriented database
   Loaded: loaded (/etc/systemd/system/mongodb.service; disabled; vendor preset: enabled)
   Active: active (running) since Tue 2017-03-14 20:10:12 EDT; 4min 27s ago
 Main PID: 30283 (mongod)
    Tasks: 17
   Memory: 49.2M
      CPU: 1.050s
   CGroup: /system.slice/mongodb.service
           └─30283 /usr/bin/mongod --quiet --config /etc/mongod.conf

Mar 14 20:10:12 ip-172-26-1-81 systemd[1]: Started High-performance, schema-free document-orien
```


`mongoimport --db cfc --collection properties --type csv --headerline --file /home/ubuntu/prop.csv`

```bash
ubuntu@ip-172-26-1-81:~$ mongoimport --db cfc --collection properties --type csv --headerline --file /home/ubuntu/prop.csv
2017-03-15T07:29:21.943-0400	connected to: localhost
2017-03-15T07:29:22.001-0400	imported 2367 documents
```

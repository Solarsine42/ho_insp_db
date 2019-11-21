exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("members")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("members").insert(
        [{"member_number":604544,"policy_number":"HO91A","contact_info":"467-166-1294"},
{"member_number":774293,"policy_number":"HO91A","contact_info":"327-563-5176"},
{"member_number":656506,"policy_number":"HO95A","contact_info":"402-442-2959"},
{"member_number":710271,"policy_number":"HO98A","contact_info":"840-574-6284"},
{"member_number":565139,"policy_number":"HO92A","contact_info":"833-782-3705"},
{"member_number":752066,"policy_number":"HO94A","contact_info":"439-323-7815"},
{"member_number":618131,"policy_number":"HO97A","contact_info":"546-543-2551"},
{"member_number":804656,"policy_number":"HO99A","contact_info":"388-960-7097"},
{"member_number":755891,"policy_number":"HO97A","contact_info":"351-208-8800"},
{"member_number":524721,"policy_number":"HO90A","contact_info":"423-952-5450"},
{"member_number":576495,"policy_number":"HO95A","contact_info":"112-410-9601"},
{"member_number":761135,"policy_number":"HO96A","contact_info":"103-767-8051"},
{"member_number":541298,"policy_number":"HO90A","contact_info":"488-513-0352"},
{"member_number":580796,"policy_number":"HO91A","contact_info":"857-632-3734"},
{"member_number":656219,"policy_number":"HO93A","contact_info":"757-614-2054"},
{"member_number":577355,"policy_number":"HO97A","contact_info":"635-784-9981"},
{"member_number":534335,"policy_number":"HO91A","contact_info":"659-593-5092"},
{"member_number":537687,"policy_number":"HO97A","contact_info":"484-489-5196"},
{"member_number":746466,"policy_number":"HO97A","contact_info":"430-745-8746"},
{"member_number":731451,"policy_number":"HO95A","contact_info":"729-280-3095"},
{"member_number":729839,"policy_number":"HO99A","contact_info":"574-201-4093"},
{"member_number":512282,"policy_number":"HO94A","contact_info":"563-656-5206"},
{"member_number":686655,"policy_number":"HO95A","contact_info":"591-683-2687"},
{"member_number":544750,"policy_number":"HO96A","contact_info":"603-719-5362"},
{"member_number":624483,"policy_number":"HO90A","contact_info":"178-727-9770"},
{"member_number":611076,"policy_number":"HO97A","contact_info":"257-947-3752"},
{"member_number":625653,"policy_number":"HO95A","contact_info":"609-896-7820"},
{"member_number":510556,"policy_number":"HO93A","contact_info":"760-304-4001"},
{"member_number":718543,"policy_number":"HO94A","contact_info":"364-225-3422"},
{"member_number":633658,"policy_number":"HO96A","contact_info":"510-922-6512"},
{"member_number":610899,"policy_number":"HO92A","contact_info":"145-516-0226"},
{"member_number":663380,"policy_number":"HO95A","contact_info":"784-907-3772"},
{"member_number":575163,"policy_number":"HO97A","contact_info":"661-597-9113"},
{"member_number":672452,"policy_number":"HO99A","contact_info":"208-582-6293"},
{"member_number":587124,"policy_number":"HO94A","contact_info":"618-415-9441"},
{"member_number":801511,"policy_number":"HO95A","contact_info":"627-924-6016"},
{"member_number":685071,"policy_number":"HO98A","contact_info":"928-116-3652"},
{"member_number":687748,"policy_number":"HO93A","contact_info":"722-301-8967"},
{"member_number":551638,"policy_number":"HO96A","contact_info":"399-897-4619"},
{"member_number":557079,"policy_number":"HO98A","contact_info":"643-489-5572"},
{"member_number":550730,"policy_number":"HO92A","contact_info":"624-961-6881"},
{"member_number":606056,"policy_number":"HO91A","contact_info":"234-728-5574"},
{"member_number":515369,"policy_number":"HO92A","contact_info":"199-479-9359"},
{"member_number":628302,"policy_number":"HO93A","contact_info":"207-565-8938"},
{"member_number":647691,"policy_number":"HO92A","contact_info":"261-845-0571"},
{"member_number":686954,"policy_number":"HO97A","contact_info":"125-706-5186"},
{"member_number":653941,"policy_number":"HO90A","contact_info":"733-793-2765"},
{"member_number":571309,"policy_number":"HO95A","contact_info":"168-526-9752"},
{"member_number":692548,"policy_number":"HO99A","contact_info":"907-123-8073"},
{"member_number":608222,"policy_number":"HO99A","contact_info":"888-552-1774"},
{"member_number":672628,"policy_number":"HO90A","contact_info":"785-344-4229"},
{"member_number":539355,"policy_number":"HO97A","contact_info":"578-945-1251"},
{"member_number":577269,"policy_number":"HO99A","contact_info":"912-242-1265"},
{"member_number":709767,"policy_number":"HO91A","contact_info":"103-331-7943"},
{"member_number":685256,"policy_number":"HO99A","contact_info":"908-160-5179"},
{"member_number":731013,"policy_number":"HO95A","contact_info":"552-538-0984"},
{"member_number":718312,"policy_number":"HO97A","contact_info":"232-395-4796"},
{"member_number":563893,"policy_number":"HO96A","contact_info":"936-206-6076"},
{"member_number":654461,"policy_number":"HO93A","contact_info":"846-917-3309"},
{"member_number":576410,"policy_number":"HO97A","contact_info":"110-409-1064"},
{"member_number":576736,"policy_number":"HO96A","contact_info":"105-366-9873"},
{"member_number":785007,"policy_number":"HO94A","contact_info":"623-475-9463"},
{"member_number":547931,"policy_number":"HO97A","contact_info":"317-286-8784"},
{"member_number":780025,"policy_number":"HO99A","contact_info":"723-453-5197"},
{"member_number":696494,"policy_number":"HO92A","contact_info":"386-772-3878"},
{"member_number":564557,"policy_number":"HO95A","contact_info":"519-466-5033"},
{"member_number":602168,"policy_number":"HO91A","contact_info":"157-393-8807"},
{"member_number":733113,"policy_number":"HO94A","contact_info":"216-608-1908"},
{"member_number":786909,"policy_number":"HO98A","contact_info":"883-314-3822"},
{"member_number":725857,"policy_number":"HO93A","contact_info":"484-570-7413"},
{"member_number":675616,"policy_number":"HO97A","contact_info":"759-580-6654"},
{"member_number":752941,"policy_number":"HO98A","contact_info":"227-384-9071"},
{"member_number":760315,"policy_number":"HO93A","contact_info":"961-314-5924"},
{"member_number":651123,"policy_number":"HO91A","contact_info":"503-325-8499"},
{"member_number":543874,"policy_number":"HO98A","contact_info":"976-863-5746"},
{"member_number":530251,"policy_number":"HO98A","contact_info":"550-450-7889"},
{"member_number":708776,"policy_number":"HO94A","contact_info":"720-866-0008"},
{"member_number":723326,"policy_number":"HO97A","contact_info":"951-380-1052"},
{"member_number":596788,"policy_number":"HO92A","contact_info":"596-233-6505"},
{"member_number":544168,"policy_number":"HO93A","contact_info":"672-219-0857"},
{"member_number":652194,"policy_number":"HO97A","contact_info":"522-786-0175"},
{"member_number":723343,"policy_number":"HO93A","contact_info":"427-513-1267"},
{"member_number":512851,"policy_number":"HO94A","contact_info":"987-928-8197"},
{"member_number":559825,"policy_number":"HO95A","contact_info":"141-515-2345"},
{"member_number":553772,"policy_number":"HO90A","contact_info":"679-584-6851"},
{"member_number":603606,"policy_number":"HO91A","contact_info":"326-160-7993"},
{"member_number":595604,"policy_number":"HO96A","contact_info":"825-456-2095"},
{"member_number":592441,"policy_number":"HO95A","contact_info":"367-182-8169"},
{"member_number":716010,"policy_number":"HO98A","contact_info":"770-358-4597"},
{"member_number":655529,"policy_number":"HO97A","contact_info":"433-710-6833"},
{"member_number":645205,"policy_number":"HO92A","contact_info":"238-175-2293"},
{"member_number":645707,"policy_number":"HO92A","contact_info":"408-186-0397"},
{"member_number":511033,"policy_number":"HO92A","contact_info":"367-941-9935"},
{"member_number":678049,"policy_number":"HO92A","contact_info":"829-237-5345"},
{"member_number":704434,"policy_number":"HO93A","contact_info":"511-429-2847"},
{"member_number":755999,"policy_number":"HO93A","contact_info":"612-204-7257"},
{"member_number":755379,"policy_number":"HO97A","contact_info":"838-978-3713"},
{"member_number":640717,"policy_number":"HO95A","contact_info":"640-736-9692"},
{"member_number":505231,"policy_number":"HO98A","contact_info":"794-723-0198"},
{"member_number":773512,"policy_number":"HO91A","contact_info":"640-832-2964"},
{"member_number":552913,"policy_number":"HO95A","contact_info":"862-363-3921"},
{"member_number":741969,"policy_number":"HO97A","contact_info":"773-432-7042"},
{"member_number":533374,"policy_number":"HO97A","contact_info":"630-645-7654"},
{"member_number":786675,"policy_number":"HO96A","contact_info":"444-814-3728"},
{"member_number":708592,"policy_number":"HO99A","contact_info":"172-841-8322"},
{"member_number":647862,"policy_number":"HO91A","contact_info":"876-168-3127"},
{"member_number":663286,"policy_number":"HO91A","contact_info":"836-670-8569"},
{"member_number":692338,"policy_number":"HO94A","contact_info":"307-391-5224"},
{"member_number":553925,"policy_number":"HO90A","contact_info":"440-618-5626"},
{"member_number":643673,"policy_number":"HO98A","contact_info":"870-412-2609"},
{"member_number":630443,"policy_number":"HO91A","contact_info":"419-296-4908"},
{"member_number":638100,"policy_number":"HO91A","contact_info":"797-184-1361"},
{"member_number":596081,"policy_number":"HO93A","contact_info":"463-521-4241"},
{"member_number":553738,"policy_number":"HO95A","contact_info":"967-430-3023"},
{"member_number":647200,"policy_number":"HO97A","contact_info":"623-454-3744"},
{"member_number":661637,"policy_number":"HO91A","contact_info":"962-869-9213"},
{"member_number":568425,"policy_number":"HO93A","contact_info":"199-110-6261"},
{"member_number":633851,"policy_number":"HO95A","contact_info":"239-640-9935"},
{"member_number":566327,"policy_number":"HO93A","contact_info":"206-117-7023"},
{"member_number":799729,"policy_number":"HO92A","contact_info":"523-592-7546"},
{"member_number":524728,"policy_number":"HO91A","contact_info":"833-799-1225"},
{"member_number":637411,"policy_number":"HO98A","contact_info":"801-198-9620"},
{"member_number":533733,"policy_number":"HO96A","contact_info":"418-894-5370"},
{"member_number":682370,"policy_number":"HO95A","contact_info":"961-602-1967"},
{"member_number":625839,"policy_number":"HO91A","contact_info":"632-162-1933"},
{"member_number":514138,"policy_number":"HO95A","contact_info":"414-368-4710"},
{"member_number":713070,"policy_number":"HO90A","contact_info":"893-393-1141"},
{"member_number":617117,"policy_number":"HO96A","contact_info":"152-678-6677"},
{"member_number":663868,"policy_number":"HO98A","contact_info":"851-698-3699"},
{"member_number":651805,"policy_number":"HO95A","contact_info":"681-769-5341"},
{"member_number":731947,"policy_number":"HO97A","contact_info":"888-605-1929"},
{"member_number":585197,"policy_number":"HO97A","contact_info":"402-312-8512"},
{"member_number":707377,"policy_number":"HO91A","contact_info":"210-944-6903"},
{"member_number":595924,"policy_number":"HO90A","contact_info":"379-310-7674"},
{"member_number":647816,"policy_number":"HO92A","contact_info":"869-430-1626"},
{"member_number":775877,"policy_number":"HO93A","contact_info":"291-336-7750"},
{"member_number":551494,"policy_number":"HO94A","contact_info":"587-617-4188"},
{"member_number":696557,"policy_number":"HO93A","contact_info":"998-125-7883"},
{"member_number":696547,"policy_number":"HO97A","contact_info":"245-765-9951"},
{"member_number":807050,"policy_number":"HO96A","contact_info":"542-661-2634"},
{"member_number":802838,"policy_number":"HO99A","contact_info":"994-941-2730"},
{"member_number":620143,"policy_number":"HO97A","contact_info":"490-791-5012"},
{"member_number":623726,"policy_number":"HO97A","contact_info":"433-958-2159"},
{"member_number":717248,"policy_number":"HO97A","contact_info":"124-667-1594"},
{"member_number":609094,"policy_number":"HO96A","contact_info":"206-907-2820"},
{"member_number":653694,"policy_number":"HO94A","contact_info":"945-633-1691"},
{"member_number":726126,"policy_number":"HO93A","contact_info":"592-865-7815"},
{"member_number":671006,"policy_number":"HO97A","contact_info":"568-621-4811"},
{"member_number":614776,"policy_number":"HO94A","contact_info":"226-628-5548"},
{"member_number":588571,"policy_number":"HO95A","contact_info":"788-504-4212"},
{"member_number":783525,"policy_number":"HO95A","contact_info":"571-567-2645"},
{"member_number":564976,"policy_number":"HO99A","contact_info":"687-455-2383"},
{"member_number":554074,"policy_number":"HO90A","contact_info":"821-579-4035"},
{"member_number":680317,"policy_number":"HO94A","contact_info":"228-201-4068"},
{"member_number":784294,"policy_number":"HO99A","contact_info":"310-571-1329"},
{"member_number":529683,"policy_number":"HO97A","contact_info":"214-147-2079"},
{"member_number":667053,"policy_number":"HO98A","contact_info":"510-351-2780"},
{"member_number":591977,"policy_number":"HO97A","contact_info":"856-744-3239"},
{"member_number":775848,"policy_number":"HO96A","contact_info":"357-423-7453"},
{"member_number":538870,"policy_number":"HO96A","contact_info":"783-899-0260"},
{"member_number":631645,"policy_number":"HO96A","contact_info":"273-496-8028"},
{"member_number":517539,"policy_number":"HO97A","contact_info":"756-358-6963"},
{"member_number":541552,"policy_number":"HO93A","contact_info":"589-603-9145"},
{"member_number":584357,"policy_number":"HO92A","contact_info":"832-110-7109"},
{"member_number":677425,"policy_number":"HO96A","contact_info":"193-363-3636"},
{"member_number":719419,"policy_number":"HO91A","contact_info":"651-298-6520"},
{"member_number":783664,"policy_number":"HO96A","contact_info":"673-201-2656"},
{"member_number":734685,"policy_number":"HO90A","contact_info":"659-451-4318"},
{"member_number":806884,"policy_number":"HO92A","contact_info":"279-473-9075"},
{"member_number":533448,"policy_number":"HO92A","contact_info":"598-989-3884"},
{"member_number":657586,"policy_number":"HO90A","contact_info":"924-309-8546"},
{"member_number":521225,"policy_number":"HO96A","contact_info":"249-426-5813"},
{"member_number":596782,"policy_number":"HO90A","contact_info":"418-423-3225"},
{"member_number":584407,"policy_number":"HO99A","contact_info":"370-436-5228"},
{"member_number":619980,"policy_number":"HO93A","contact_info":"707-103-6907"},
{"member_number":642758,"policy_number":"HO92A","contact_info":"156-921-5970"},
{"member_number":573751,"policy_number":"HO95A","contact_info":"491-296-3004"},
{"member_number":521551,"policy_number":"HO92A","contact_info":"958-120-5675"},
{"member_number":588268,"policy_number":"HO91A","contact_info":"180-981-3440"},
{"member_number":721230,"policy_number":"HO99A","contact_info":"597-455-4239"},
{"member_number":552195,"policy_number":"HO90A","contact_info":"627-688-8421"},
{"member_number":749731,"policy_number":"HO99A","contact_info":"199-301-4981"},
{"member_number":652764,"policy_number":"HO92A","contact_info":"974-474-1653"},
{"member_number":616964,"policy_number":"HO90A","contact_info":"912-203-7368"},
{"member_number":775525,"policy_number":"HO98A","contact_info":"389-120-0012"},
{"member_number":798471,"policy_number":"HO97A","contact_info":"645-867-8564"},
{"member_number":525907,"policy_number":"HO98A","contact_info":"891-250-6604"},
{"member_number":591452,"policy_number":"HO92A","contact_info":"933-297-7170"},
{"member_number":754172,"policy_number":"HO98A","contact_info":"394-156-3630"},
{"member_number":753220,"policy_number":"HO93A","contact_info":"790-592-8137"},
{"member_number":570518,"policy_number":"HO94A","contact_info":"160-443-6883"},
{"member_number":788733,"policy_number":"HO96A","contact_info":"542-716-5211"},
{"member_number":593004,"policy_number":"HO96A","contact_info":"214-735-4718"},
{"member_number":611324,"policy_number":"HO92A","contact_info":"395-710-8613"},
{"member_number":774380,"policy_number":"HO91A","contact_info":"478-718-7051"},
{"member_number":625192,"policy_number":"HO93A","contact_info":"692-213-7992"},
{"member_number":700461,"policy_number":"HO97A","contact_info":"396-460-4887"},
{"member_number":544624,"policy_number":"HO95A","contact_info":"823-541-0842"},
{"member_number":552070,"policy_number":"HO93A","contact_info":"814-605-0955"},
{"member_number":740256,"policy_number":"HO95A","contact_info":"913-650-9651"},
{"member_number":775716,"policy_number":"HO94A","contact_info":"284-180-7821"},
{"member_number":615003,"policy_number":"HO91A","contact_info":"570-991-2506"},
{"member_number":716750,"policy_number":"HO90A","contact_info":"906-426-5071"},
{"member_number":583489,"policy_number":"HO91A","contact_info":"643-733-1714"},
{"member_number":623193,"policy_number":"HO91A","contact_info":"161-962-7848"},
{"member_number":635291,"policy_number":"HO93A","contact_info":"736-616-1053"},
{"member_number":664156,"policy_number":"HO91A","contact_info":"262-698-5523"},
{"member_number":574330,"policy_number":"HO91A","contact_info":"712-241-3456"},
{"member_number":788250,"policy_number":"HO90A","contact_info":"968-514-7121"},
{"member_number":790733,"policy_number":"HO91A","contact_info":"652-473-1921"},
{"member_number":698716,"policy_number":"HO92A","contact_info":"936-957-6579"},
{"member_number":782022,"policy_number":"HO99A","contact_info":"342-942-1020"},
{"member_number":689938,"policy_number":"HO99A","contact_info":"791-250-0623"},
{"member_number":807482,"policy_number":"HO99A","contact_info":"431-653-7764"},
{"member_number":540164,"policy_number":"HO94A","contact_info":"946-101-2737"},
{"member_number":683105,"policy_number":"HO91A","contact_info":"927-929-1045"},
{"member_number":665886,"policy_number":"HO90A","contact_info":"240-583-3625"},
{"member_number":647646,"policy_number":"HO94A","contact_info":"829-654-2029"},
{"member_number":644064,"policy_number":"HO94A","contact_info":"102-828-0490"},
{"member_number":641638,"policy_number":"HO93A","contact_info":"288-722-0126"},
{"member_number":681810,"policy_number":"HO96A","contact_info":"402-113-5738"},
{"member_number":650552,"policy_number":"HO91A","contact_info":"159-732-7180"},
{"member_number":532647,"policy_number":"HO91A","contact_info":"897-692-9958"},
{"member_number":595315,"policy_number":"HO96A","contact_info":"571-294-1302"},
{"member_number":758433,"policy_number":"HO96A","contact_info":"657-233-5179"},
{"member_number":592378,"policy_number":"HO97A","contact_info":"673-839-5852"},
{"member_number":645563,"policy_number":"HO98A","contact_info":"459-922-1731"},
{"member_number":624663,"policy_number":"HO94A","contact_info":"743-682-3720"},
{"member_number":719691,"policy_number":"HO95A","contact_info":"481-625-4203"},
{"member_number":735034,"policy_number":"HO99A","contact_info":"800-408-3364"},
{"member_number":511125,"policy_number":"HO92A","contact_info":"287-388-3034"},
{"member_number":788699,"policy_number":"HO99A","contact_info":"765-918-6732"},
{"member_number":545172,"policy_number":"HO99A","contact_info":"281-972-9600"},
{"member_number":668077,"policy_number":"HO91A","contact_info":"827-394-7316"},
{"member_number":682237,"policy_number":"HO96A","contact_info":"769-172-1149"},
{"member_number":689325,"policy_number":"HO95A","contact_info":"977-688-0798"},
{"member_number":523229,"policy_number":"HO96A","contact_info":"483-985-9324"},
{"member_number":796636,"policy_number":"HO99A","contact_info":"308-786-6655"},
{"member_number":614163,"policy_number":"HO90A","contact_info":"466-668-2505"},
{"member_number":533938,"policy_number":"HO98A","contact_info":"769-991-8907"},
{"member_number":636141,"policy_number":"HO97A","contact_info":"373-182-3951"},
{"member_number":711432,"policy_number":"HO98A","contact_info":"949-112-8099"},
{"member_number":543543,"policy_number":"HO93A","contact_info":"745-365-4775"},
{"member_number":524724,"policy_number":"HO96A","contact_info":"318-173-1088"},
{"member_number":564152,"policy_number":"HO92A","contact_info":"553-188-4420"},
{"member_number":615898,"policy_number":"HO91A","contact_info":"431-713-6034"},
{"member_number":722518,"policy_number":"HO91A","contact_info":"172-654-2855"},
{"member_number":545849,"policy_number":"HO94A","contact_info":"404-279-8975"},
{"member_number":659100,"policy_number":"HO95A","contact_info":"987-397-4717"},
{"member_number":606104,"policy_number":"HO97A","contact_info":"804-989-7470"},
{"member_number":571035,"policy_number":"HO92A","contact_info":"849-959-7978"},
{"member_number":659744,"policy_number":"HO96A","contact_info":"556-926-3051"},
{"member_number":527922,"policy_number":"HO90A","contact_info":"918-650-7310"},
{"member_number":688154,"policy_number":"HO93A","contact_info":"627-467-0938"},
{"member_number":639309,"policy_number":"HO92A","contact_info":"846-406-4521"},
{"member_number":709910,"policy_number":"HO94A","contact_info":"155-405-2618"},
{"member_number":697006,"policy_number":"HO92A","contact_info":"253-185-2675"},
{"member_number":714846,"policy_number":"HO98A","contact_info":"676-911-2293"},
{"member_number":733249,"policy_number":"HO98A","contact_info":"840-975-9135"},
{"member_number":664493,"policy_number":"HO94A","contact_info":"511-970-4109"},
{"member_number":506013,"policy_number":"HO97A","contact_info":"969-100-2867"},
{"member_number":575618,"policy_number":"HO92A","contact_info":"214-304-9355"},
{"member_number":788099,"policy_number":"HO98A","contact_info":"917-462-8518"},
{"member_number":667178,"policy_number":"HO99A","contact_info":"418-800-2880"},
{"member_number":599908,"policy_number":"HO95A","contact_info":"394-988-1934"},
{"member_number":507151,"policy_number":"HO91A","contact_info":"200-452-4873"},
{"member_number":754499,"policy_number":"HO97A","contact_info":"581-208-6968"},
{"member_number":788038,"policy_number":"HO97A","contact_info":"894-212-1807"},
{"member_number":615665,"policy_number":"HO93A","contact_info":"186-981-2482"},
{"member_number":734693,"policy_number":"HO92A","contact_info":"225-125-8922"},
{"member_number":602928,"policy_number":"HO93A","contact_info":"765-565-6162"},
{"member_number":614119,"policy_number":"HO98A","contact_info":"920-233-0637"},
{"member_number":585555,"policy_number":"HO98A","contact_info":"953-100-2378"},
{"member_number":660701,"policy_number":"HO90A","contact_info":"323-561-0596"},
{"member_number":671862,"policy_number":"HO97A","contact_info":"405-399-1404"},
{"member_number":781346,"policy_number":"HO94A","contact_info":"376-933-4066"},
{"member_number":510422,"policy_number":"HO95A","contact_info":"470-952-2837"},
{"member_number":668979,"policy_number":"HO93A","contact_info":"102-304-6985"},
{"member_number":722148,"policy_number":"HO92A","contact_info":"581-892-1306"},
{"member_number":750975,"policy_number":"HO97A","contact_info":"324-445-9246"}]
      );
    });
};
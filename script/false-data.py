import csv
import random


us_state_abbrev = {
    'Alabama': 'AL',
    'Alaska': 'AK',
    'American Samoa': 'AS',
    'Arizona': 'AZ',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'District of Columbia': 'DC',
    'Florida': 'FL',
    'Georgia': 'GA',
    'Guam': 'GU',
    'Hawaii': 'HI',
    'Idaho': 'ID',
    'Illinois': 'IL',
    'Indiana': 'IN',
    'Iowa': 'IA',
    'Kansas': 'KS',
    'Kentucky': 'KY',
    'Louisiana': 'LA',
    'Maine': 'ME',
    'Maryland': 'MD',
    'Massachusetts': 'MA',
    'Michigan': 'MI',
    'Minnesota': 'MN',
    'Mississippi': 'MS',
    'Missouri': 'MO',
    'Montana': 'MT',
    'Nebraska': 'NE',
    'Nevada': 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    'Northern Mariana Islands':'MP',
    'Ohio': 'OH',
    'Oklahoma': 'OK',
    'Oregon': 'OR',
    'Pennsylvania': 'PA',
    'Puerto Rico': 'PR',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    'Tennessee': 'TN',
    'Texas': 'TX',
    'Utah': 'UT',
    'Vermont': 'VT',
    'Virgin Islands': 'VI',
    'Virginia': 'VA',
    'Washington': 'WA',
    'West Virginia': 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY'
}

#change params of query as you need
query = ""
naics=""
mcc=""
# utilities: 24
#airlines: 9
#lodging: 11
#online marketplaces:81
mcg="9"
industry="airlines"
zipcode = ""
msa=""
query_state ="TX"
country ="US"
query_date = ""

#connect to histrocial data table
#HERE somehow


entryid=0
#
# with open('historical.csv',mode='w+') as csvfile:
#     writer = csv.writer(csvfile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
#     writer.writerow(["ID","MCG","Industry","State","Date","Sales_Year_on_Year","Sales_Month_on_Month","Transactions_Year_on_Year","Transactions_Month_on_Month"])
#     #for the following years
#     for num in range(0,4):
#         if(num==1):
#             mcg = "11"
#             industry = "lodging"
#         elif(num==2):
#             mcg="24"
#             industry="utilities"
#         elif(num==3):
#             mcg="81"
#             industry="online marketplaces"
#         for state, abbrev in us_state_abbrev.items():
#             for year in range(2010,2016):
#
#                 #for each month jan-dec
#                 for i in range(1,13):
#                     positivefactor = 0.5
#                     if(i<=9):
#                         query_date = str(year) + "0" + str(i)
#                     else:
#                         query_date = str(year) + "" + str(i)
#                     if(i==1):
#                         positivefactor= 0.25
#                     elif(i==3):
#                         positivefactor = 0.1
#                     elif(i==6):
#                         positivefactor = 0.7
#                     elif(i==9):
#                         positivefactor = 0.6
#                     elif(i==12):
#                         positivefactor = 0.95
#
#                     query_state = abbrev
#                     #naics_or_mcc_or_mcg = "{\"requestData\": {\"naicsCodeList\": ["+ naics +"],\"merchantCategoryCodeList\": ["+ mcc +"],\"merchantCategoryGroupsCodeList\": ["+ mcg +"],"
#                     #zip_or_msa_state= "\"postalCodeList\": ["+ zipcode +"],\"msaList\": ["+msa+"],\"countrySubdivisionList\": [" + query_state + "],"
#                     #country = "\"merchantCountry\": "+ country +","
#                     #month = "\"monthList\": ["+ query_date +"],"
#                     #options = "\"accountFundingSourceList\": [\"All\"],\"eciIndicatorList\": [\"All\"],\"platformIDList\": [\"All\"],\"posEntryModeList\": [\"All\"],\"cardPresentIndicator\": \"All\",\"groupList\": [\"standard\"]}}\""
#                     #query = naics_or_mcc_or_mcg + zip_or_msa_state + country + month + options
#                     #call api with query to get data, transfer that data into the table -not implemented. Here is us uplaoding sample data
#                     salesyoy = random.uniform(-3.1,12.2)*positivefactor
#                     salesmom = random.uniform(-5.5,25.8)*positivefactor
#                     transyoy = random.uniform(-10.2,30.1)*positivefactor
#                     transmom = random.uniform(-20.8,70.1)*positivefactor
#                     entryid+=1
#                     writer.writerow([entryid,mcg,industry,abbrev,query_date,salesyoy,salesmom,transyoy,transmom])


entryid=0

with open('current.csv',mode='w+') as csvfile:
    writer = csv.writer(csvfile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    writer.writerow(["ID","MCG","Industry","State","Date","Sales_Year_on_Year","Sales_Month_on_Month","Transactions_Year_on_Year","Transactions_Month_on_Month"])
    #for the following years
    for num in range(0,4):

        if(num==1):
            mcg = "11"
            industry = "lodging"
        elif(num==2):
            mcg="24"
            industry="utilities"

        elif(num==3):
            mcg="81"
            industry="online marketplaces"

        for state, abbrev in us_state_abbrev.items():
                    query_date = "202006"
                    query_state = abbrev

                    #naics_or_mcc_or_mcg = "{\"requestData\": {\"naicsCodeList\": ["+ naics +"],\"merchantCategoryCodeList\": ["+ mcc +"],\"merchantCategoryGroupsCodeList\": ["+ mcg +"],"
                    #zip_or_msa_state= "\"postalCodeList\": ["+ zipcode +"],\"msaList\": ["+msa+"],\"countrySubdivisionList\": [" + query_state + "],"
                    #country = "\"merchantCountry\": "+ country +","
                    #month = "\"monthList\": ["+ query_date +"],"
                    #options = "\"accountFundingSourceList\": [\"All\"],\"eciIndicatorList\": [\"All\"],\"platformIDList\": [\"All\"],\"posEntryModeList\": [\"All\"],\"cardPresentIndicator\": \"All\",\"groupList\": [\"standard\"]}}\""
                    #query = naics_or_mcc_or_mcg + zip_or_msa_state + country + month + options
                    #call api with query to get data, transfer that data into the table -not implemented. Here is us uplaoding sample data
                    if(num==0):
                        salesyoy = random.uniform(-100.0,-10.0)
                        salesmom = random.uniform(-100.0,-20.0)
                        transyoy = random.uniform(-100.0,-20.0)
                        transmom = random.uniform(-100.0,-10.0)
                    elif(num==1):
                        salesyoy = random.uniform(-70.0,0.0)
                        salesmom = random.uniform(-80.0,0.0)
                        transyoy = random.uniform(-50.0,0.0)
                        transmom = random.uniform(-80.0,0.0)
                    elif(num==2):
                        salesyoy = random.uniform(-3.1,12.2)
                        salesmom = random.uniform(-5.5,25.8)
                        transyoy = random.uniform(-10.2,30.1)
                        transmom = random.uniform(-20.8,70.1)
                    else:
                        salesyoy = random.uniform(15.0,40.0)
                        salesmom = random.uniform(15.0,30.0)
                        transyoy = random.uniform(20.0,50.0)
                        transmom = random.uniform(20.0,50.0)

                    entryid+=1
                    writer.writerow([entryid,mcg,industry,abbrev,query_date,salesyoy,salesmom,transyoy,transmom])
print("done")

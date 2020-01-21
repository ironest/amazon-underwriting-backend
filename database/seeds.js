require("dotenv").config();

require("./connect");

const PageModel = require('./../database/models/page_model');
const InfoModel = require('./../database/models/info_model');

const contacts = {
    footer_info: {
      website: {
        name: "Amazon Underwriting Pty Ltd",
        url: "https://www.amazonunderwriting.com.au/index.html"
      },
      address: "52 Chisholm Street, Darlinghurst NSW 2010",
      AFSL: "482029",
      ABN: "17 605 879 507"
    },
    childcare_info: {
      tel: "(02) 9357 1798",
      email: "gida@amazonunderwriting.com.au"
    },
    hbb_info: {
      tel: "(02) 9357 1798 (press line 2)",
      email: "info@amazonunderwriting.com.au"
    },
    accident_info: {
      tel: "(02) 9357 1798",
      email: "toni@amazonunderwriting.com.au"
    },
    contact_info: {
      tel: "+61 2 9357 1798",
      email: "info@amazonunderwriting.com.au"
    }
  }

const pages = [
    {
        name: "Common",
        sections: [
            {
                name: "Document Downloads",
                links: [
                    {
                        name: "Childcare Brochure",
                        url: "https://www.amazonunderwriting.com.au/PDFs/DocDown/HOMEBiZinsBrochure_BD_17052019.pdf"
                    },
                    {
                        name: "HomeBiz Brochure",
                        url: "https://www.amazonunderwriting.com.au/PDFs/DocDown/HOMEBiZinsBrochure_BD_17052019.pdf"
                    },
                    {
                        name: "Personal Accident Brochure",
                        url: "https://www.amazonunderwriting.com.au/PDFs/DocDown/PASBrochure_17052019.pdf?p=1579522459038"
                    },
                    {
                        name: "Important Information",
                        url: "https://www.amazonunderwriting.com.au/important.html"
                    }
                ]
            },
            {
                name: "Claim Forms",
                links: [
                    {
                        name: "Public Liability",
                        url: "https://www.amazonunderwriting.com.au/PDFs/ClaimForms/Public%20Liability%20Claims.pdf"
                    },
                    {
                        name: "Property",
                        url: "https://www.amazonunderwriting.com.au/PDFs/ClaimForms/Gallagher%20Bassett%20Services%20Pty%20Ltd%20-%20Property%20Claim%20Form.pdf"
                    },
                    {
                        name: "Personal Accident",
                        url: "https://www.amazonunderwriting.com.au/PDFs/ClaimForms/Proclaim%20Personal%20Accident%20Claim%20Form%2005%2012.pdf"
                    }
                ]
            },
            {
                name: "Useful Links",
                links: [
                    {
                        name: "National Insurance Brokers Association (NIBA)",
                        url: "http://www.niba.com.au/"
                    },
                    {
                        name: "Need a Broker",
                        url: "http://www.needabroker.com.au/html/"
                    }
                ]
            },
        ]
    },
    {
        name: "Childcare",
        sections: [
            {
                name: "Application Forms",
                links: [
                    {
                        name: "Childcare Providers",
                        url: "https://www.amazonunderwriting.com.au/PDFs/ApplicationForms/CC/AU%20CC%20Centre.pdf"
                    },
                    {
                        name: "Play Centre Cafes",
                        url: "https://www.amazonunderwriting.com.au/PDFs/ApplicationForms/CC/AU%20CC%20PlayCentre%20May%202019.pdf"
                    },
                    {
                        name: "Childcare Property Owners",
                        url: "https://www.amazonunderwriting.com.au/PDFs/ApplicationForms/CC/AU%20CC%20PropOwn.pdf"
                    },
                    {
                        name: "Babysitters/Nanny's",
                        url: "https://www.amazonunderwriting.com.au/PDFs/ApplicationForms/CC/AU%20CC%20Indiv.pdf"
                    }
                ]
            }
        ]
    },
    {
        name: "Personal Accident",
        sections: [
            {
                name: "Application Forms",
                links: [
                    {
                        name: "Individual Personal Accident and/or Sickness",
                        url: "https://www.amazonunderwriting.com.au/PDFs/ApplicationForms/PA/Amazon%20Underwriting%20Individual%20IPAS%20Application%20Form.pdf"
                    },
                    {
                        name: "Group Personal Accident and/or Sickness",
                        url: "https://www.amazonunderwriting.com.au/PDFs/ApplicationForms/PA/Amazon%20Underwriting%20Group%20PAS%20Application%20Form.pdf"
                    },
                    {
                        name: "Voluntary Workers Personal Accident and/or Sickness",
                        url: "https://www.amazonunderwriting.com.au/PDFs/ApplicationForms/PA/AmazonUnderwriting_VoluntaryWorkersPAS_ApplicationForm.pdf"
                    },
                    {
                        name: "Journey Cover",
                        url: "https://www.amazonunderwriting.com.au/PDFs/ApplicationForms/PA/Amazon%20Underwriting%20Journey%20Cover%20Application%20Form.pdf"
                    }
                ]
            }
        ]
    }
]

async function populateDB(){

    await InfoModel.deleteMany();
    await PageModel.deleteMany();
    
    let infoResult = await InfoModel.create(contacts)
        .catch(err => console.log(`InfoModel creation returned: ${err}`));

    for (let page of pages) {

        let { name, sections } = page;

        let pageResult = await PageModel.create({ name })
            .catch(err => console.log(`Page creation returned: ${err}`))

        for (let section of sections) {

            let { name, links } = section;

            pageResult.sections.push({ name });
            await pageResult.save()
                .catch(err => console.log(`Section creation returned: ${err}`))

            let { length } = pageResult.sections;

            for (let link of links) {
                let { name, url } = link;

                pageResult.sections[length - 1].links.push({ name, url })
                await pageResult.save()
                    .catch(err => console.log(`Link creation returned: ${err}`))
            }
        }
    }

    console.log("\nDatabase succesfully seeded!\n");
    process.exit();

}

populateDB();




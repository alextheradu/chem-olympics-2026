export interface Citation {
  id: number
  authors: string
  title: string
  journal?: string
  year: number
  url: string
  type: 'academic' | 'government' | 'ngo'
}

export const groupMembers = ['Alex Radu', 'Evelyn Gray', 'Abigail Javer', 'Alexis DeRose', 'Audrey Gray']

export const citations: Citation[] = [
  {
    id: 1,
    authors: 'Rani, L. et al.',
    title: 'A Comprehensive Review on Pesticide Toxicity, Its Effects on Aquatic Life and Remediation Strategies',
    journal: 'PubMed Central',
    year: 2024,
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11570982/',
    type: 'academic',
  },
  {
    id: 2,
    authors: 'Desneux, N. et al.',
    title: 'The Sublethal Effects of Pesticides on Beneficial Arthropods',
    journal: 'Annual Review of Entomology',
    year: 2007,
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2428010/',
    type: 'academic',
  },
  {
    id: 3,
    authors: 'Beyond Pesticides',
    title: 'Carbaryl Factsheet - Toxicological and Environmental Data',
    year: 2023,
    url: 'https://www.beyondpesticides.org/assets/media/documents/pesticides/factsheets/Carbaryl.pdf',
    type: 'ngo',
  },
  {
    id: 4,
    authors: 'U.S. Environmental Protection Agency',
    title: 'Carbofuran Interim Reregistration Eligibility Decision Fact Sheet',
    year: 2006,
    url: 'https://archive.epa.gov/pesticides/reregistration/web/html/carbofuran_ired_fs.html',
    type: 'government',
  },
  {
    id: 5,
    authors: 'Pesticide Action Network North America',
    title: "Aldicarb's Return Puts Children and Farm Workers at Risk",
    year: 2022,
    url: 'https://www.panna.org/news/aldicarbs-return-puts-children-and-farm-workers-risk/',
    type: 'ngo',
  },
  {
    id: 6,
    authors: 'Earth.org',
    title: 'The Environmental and Health Impacts of Pesticides',
    year: 2023,
    url: 'https://earth.org/the-environmental-and-health-impacts-of-pesticides/',
    type: 'ngo',
  },
  {
    id: 7,
    authors: 'U.S. Environmental Protection Agency',
    title: 'Aquatic Life Criteria for Carbaryl',
    year: 2024,
    url: 'https://www.epa.gov/wqc/aquatic-life-criteria-carbaryl',
    type: 'government',
  },
  {
    id: 8,
    authors: 'U.S. Environmental Protection Agency',
    title: 'Methomyl',
    year: 2021,
    url: 'https://19january2021snapshot.epa.gov/ingredients-used-pesticide-products/methomyl_.html',
    type: 'government',
  },
  {
    id: 9,
    authors: 'U.S. Environmental Protection Agency',
    title: 'Oxamyl Reregistration Eligibility Decision Fact Sheet',
    year: 2000,
    url: 'https://www3.epa.gov/pesticides/chem_search/reg_actions/reregistration/fs_PC-103801_1-Nov-00.pdf',
    type: 'government',
  },
  {
    id: 10,
    authors: 'Beyond Pesticides',
    title: 'New Research Links Propoxur to Abnormal Neurodevelopment in Children',
    year: 2011,
    url: 'https://beyondpesticides.org/dailynewsblog/2011/12/new-research-links-propoxur-to-abnormal-neurodevelopment-in-children/',
    type: 'ngo',
  },
  {
    id: 11,
    authors: 'Delaware Health and Social Services',
    title: 'Carbamate FAQ',
    year: 2023,
    url: 'https://dhss.delaware.gov/wp-content/uploads/sites/10/dph/pdf/Carbamate_FAQ_PUB_ENG_0323.pdf',
    type: 'government',
  },
]

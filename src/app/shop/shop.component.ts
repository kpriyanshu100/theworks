import { Component, Input, SimpleChanges } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

interface Alphabet {
  value: string;
  viewValue: string;
}

interface SortBy {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
 
  
  selectedValue: string='';
  selectedSortValue: string='';
  selectedAlphabetValue: string | null = null;
  filteredAccordions: any[] = [];
  searchKeyword: string = '';
  searchData:any;


  constructor(public sharedService: SharedDataService) {}

  ngOnInit(){
    this.searchData=this.sharedService.inputValue.subscribe(data =>{
      this.searchData = data;
      this.filterAccordions();
    });
  }
 
  alphabet: Alphabet[] = [
    {value: 'A', viewValue: 'A'},
    {value: 'B', viewValue: 'B'},
    {value: 'C', viewValue: 'C'},
    {value: 'D', viewValue: 'D'},
    {value: 'E', viewValue: 'E'},
    {value: 'F', viewValue: 'F'},
   
  ];

  sortBy: SortBy[] = [
    {value: 'mostUsed', viewValue: 'Most Used'},
    {value: 'temp', viewValue: 'Temperory'},
    {value: 'oneTIme', viewValue: 'One Time'},
  ];
  accordions = [
    {
      accordionTitle: 'Accordion',
      subHeading: 'Sub Heading 1',
      content: 'Explore the wonders of nature in the lush forests, serene lakes, and majestic mountains. Experience the thrill of adventure with hiking, camping, and wildlife safaris. Discover diverse cultures, savor local cuisines, and immerse yourself in vibrant traditions. Travel to new destinations, create memories, and embrace the beauty of the world around you."',
      isExpanded: false
    },
    {
      accordionTitle: 'Bcedion 2',
      subHeading: 'Sub Heading 2',
      content: 'Tropical forests are common to areas near the equator, such as Southeast Asia, sub-Saharan Africa, and Central America. Temperatures in tropical forests have been reported to range between 20 and 31°C (68 and 88°F). Tropical rainforests are the epitome of biodiversity. Animals include the endangered harpy eagle (Harpia harpyja)—a large predatory bird—which has become scarce throughout Central and South America, largely due to habitat loss.',
      isExpanded: false
    },
    {
      accordionTitle: 'Candid',
      subHeading: 'Sub Heading 3',
      content: 'Bonobos (Pan paniscus), an ape species that calls the tropical forests of the Democratic Republic of the Congo in Africa their home, are also endangered. Deforestation and poaching for human sustenance have caused their populations to decline.',
      isExpanded: false
    },
    {
      accordionTitle: 'Drumphet Novel',
      subHeading: 'Sub Heading 4',
      content: 'Tropical mangrove forests, characterized by trees and shrubs that grow in salty or brackish water, are found in the tropics and subtropics. The red mangrove forest on the Panamanian island of Escudo de Veragua is home to the critically endangered pygmy three-toed sloth (Bradypus pygmaeus).',
      isExpanded: false
    },
    {
      accordionTitle: 'Eorem Upsum',
      subHeading: 'Sub Heading 5',
      content: 'The third type of forest is the boreal forest, also known as taiga. Boreal forests, one of the world’s largest land biomes, are found across Siberia, Scandinavia, and North America (Alaska and Canada). Boreal forests have a significant role in removing carbon dioxide from the atmosphere. Temperatures in boreal forests are, on average, below freezing. Conifers, spruce, fir, and pine trees are the predominant needle-leaf plant species in boreal forests.',
      isExpanded: false
    },
    {
      accordionTitle: 'Flutnon',
      subHeading: 'Sub Heading 6',
      content: 'Moose and deer are just a couple of examples of large herbivorous mammals in this environment. Most birds native to the taiga migrate to find warmer conditions during the forest’s harsh winters.',
      isExpanded: false
    },
    {
      accordionTitle: 'MarksMaen',
      subHeading: 'Sub Heading 7',
      content: 'A forest is defined as an environment that is covered by trees at least five meters (16 feet) high over an area of at least 0.5 hectares (1.2 acres)—a bit smaller than the size of an American football field. Forests grow in cold, temperate, and tropical regions and cover about 30 percent of the land area around the globe. They provide resources for humans, including food, timber, energy, shelter, and medicine. The trees in forests help purify water by filtering pollutants from water in the soil before it reaches a waterway. In addition, trees store carbon from the atmosphere and provide supportive environments for plants and animals.',
      isExpanded: false
    },
    {
      accordionTitle: 'Sintini',
      subHeading: 'Sub Heading 8',
      content: 'Forests have long been under assault by loggers and people clearing land for agriculture. They have also been disappearing because of natural causes, such as climate change, forest fires, and the death of trees from disease or insects. Between 1990 and 2015, the area occupied by forests worldwide decreased by one percent, with most of the losses occurring in the tropics. Scientists predict that as human populations rise, deforestation to convert tropical forests to agricultural land will undoubtedly continue.',
      isExpanded: false
    },
    {
      accordionTitle: 'Acc',
      subHeading: 'Sub Heading 9',
      content: 'There have, however, been increases in the size of some forests, often because trees in those areas were replanted. Forests can also naturally replenish themselves if the land is nurtured and protected from any further timber harvesting.',
      isExpanded: false
    }
    // Add more accordion items as needed...
  ];

  
  

  toggleAccordion(item: any) {
    // Close all accordions first
    this.filteredAccordions.forEach(acc => {
      if (acc !== item) {
        acc.isExpanded = false;
      }
    });

    // Open the clicked accordion
    item.isExpanded = !item.isExpanded;
  }

 

  filterAccordions() {
  
    if(this.searchData !='hello' && typeof this.searchData == 'string'  ){
      this.filteredAccordions = this.accordions.filter(acc =>
      (this.searchData === '' || acc.content.toLowerCase().includes(this.searchData?.toLowerCase()))
    );
  }
  if(this.selectedAlphabetValue){
    this.filteredAccordions = this.accordions.filter(acc =>
      (this.selectedAlphabetValue === null || acc.accordionTitle.startsWith(this.selectedAlphabetValue)) 
    
    );
  }
}
}

<?php
class Building{
    protected $floors;
    protected $materials;
    protected $address;
    
    public function __construct(int $floors, string $materials, string $address){
        $this->floors = $floors;
        $this->materials = $materials;
        $this->address = $address;
    }
    
    public function getFloors(): int{
        return $this->floors;
    }
    
    public function getMaterials(): string{
        return $this->materials;
    }
    
    public function getAddress(): string{
        return $this->address;
    }
    
    public function toString() : string
    {
        $props = ["Floors : " . $this->floors,
            "Material : " . $this->materials,
            "Address : " . $this->address,
        ];

        $str = "";

        foreach ($props as $p){
            $str = $str . $p . "\n";
        }
        return $str;
    }
}
?>
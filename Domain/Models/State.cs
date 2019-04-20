using System.Collections.Generic;

namespace simulator_backend.Domain.Models
{
    public class State
    {
        public string Name { get; set; }

        public string Type { get; } = "regular";

        public IList<Transition> Transitions { get; set; } = new List<Transition>();

        public Achievement Achievement { get; set; };

        public string Content = "";
    }
}
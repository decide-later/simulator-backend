using System.Collections.Generic;

namespace simulator_backend.Domain.Models
{
    public class RegularState : State
    {
        private string Name;
        private string Content;

        private Achievement achievement;

        public RegularState(string Name, string Content)
        {
            this.Name = Name;
            this.Content = Content;
        }

        public string getName()
        {
            return this.Name;
        }

        public string getType()
        {
            return "regular";
        }

        public string getContent()
        {
            return this.Content;
        }

        public IList<Transition> Transitions { get; set; } = new List<Transition>();

        public Achievement Achievement { get; set; };
    }
}